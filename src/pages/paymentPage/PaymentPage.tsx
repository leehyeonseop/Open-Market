import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useQueries, useQueryClient } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItemState, checkedCartItemState } from '../../atom';
import { axiosInstance, getJWTHeader } from '../../axiosInstance';
import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
import { useCart } from '../../hooks/useCart';
import { useModify } from '../../hooks/useModify';
import { getProductDetail } from '../../hooks/useProductDetail';
import { getUser } from '../../localStorage';
import { ICartItemDetail, ICartItemData, IModifyData } from '../../types';
import {
    Div,
    H2,
    Main,
    PaymentInfo,
    PaymentHeader,
    ProductInfo,
    Total,
    Span,
    TotalPrice,
    Wrapper,
    StyledPaymentMethod,
} from './PaymentPage.style';

const PaymentPage = () => {
    const { register, handleSubmit } = useForm();

    interface IState {
        order_kind: string;
        items: ICartItemDetail[];
        cartItems: ICartItemData[];
    }

    const location = useLocation();
    const state = location.state as IState;

    let totalProductPrice = 0;
    let totalShippingFee = 0;

    state.items.forEach((item) => {
        totalProductPrice += item.price * item.quantity;
        totalShippingFee += item.shipping_fee;
    });

    let totalPrice = totalProductPrice + totalShippingFee;

    const cartItems = state.cartItems;
    const items = state.items;

    console.log('결제페이지에서 장바구니 아이템 : ', cartItems);

    console.log('선택해서 결제페이지로 온 아이템들 : ', items);

    interface IBaseOrderData {
        total_price: number;
        order_kind: string;
        receiver: string;
        receiver_phone_number: string;
        address: string;
        address_message: string;
        payment_method: string;
    }

    interface IOrderData extends IBaseOrderData {
        product_id?: number;
        quantity?: number;
    }

    const modify = useModify();
    const user = getUser();

    useEffect(() => {
        console.log('자 처음에는 머가 나올까!');
        console.log(orderItemCheck());
        console.log('요고는?');
    }, []);

    const orderItemCheck = () => {
        // 1. 선택된 아이템들의 아이디를 뽑아냅니다.
        const selectedProductIDList = items.map((item: any) => item.product_id);
        console.log('selectedProductIDList : ', selectedProductIDList);

        // 2. 카트아이템에서 선택된 아이템들을 뽑아낼겁니다.
        const selectedItemList = cartItems.reduce(
            (res: any, ref: any, i: number) => {
                if (selectedProductIDList.includes(ref.product_id)) {
                    res.push(ref);
                }
                return res;
            },
            [],
        );

        // 3 선택되지 아이템들은 is_active를 false로 바꿔줘야하기 때문에 또한 뽑아냅니다.
        const unSelectedItemList = cartItems.reduce(
            (res: any, ref: any, i: number) => {
                if (!selectedProductIDList.includes(ref.product_id)) {
                    res.push(ref);
                }
                return res;
            },
            [],
        );

        console.log('선택된 아이템이 맞을까요  ? ', selectedItemList);
        console.log('선택되지 않은 아이템 리스트들 : ', unSelectedItemList);

        const promiseList: any = [];

        // 4. 선택된 아이템이 is_active가 false라면? 안되죠!
        selectedItemList.forEach((item: any) => {
            if (!item.is_active) {
                const modifyData: IModifyData = {
                    user: user,
                    cart_item_id: item.cart_item_id,
                    product_id: item.product_id,
                    is_active: !item.is_active,
                    amount: item.quantity,
                };

                promiseList.push(modify(modifyData));
            }
        });

        // 5. 선택되지 않은 아이템들은 is_active가 true라면 false로 바꿔줘야 합니다.
        unSelectedItemList.forEach((item: any) => {
            if (item.is_active) {
                const modifyData: IModifyData = {
                    user: user,
                    cart_item_id: item.cart_item_id,
                    product_id: item.product_id,
                    is_active: !item.is_active,
                    amount: item.quantity,
                };

                promiseList.push(modify(modifyData));
            }
        });
        console.log('아이템 체크 끝');

        return promiseList;
    };

    const order = async (
        data: FieldValues,
        totalPrice: number,
        orderKind: string,
    ) => {
        console.log('totalPrice : ', totalPrice);

        const phone_number =
            data.startPhoneNum + data.centerPhoneNum + data.endPhoneNum;

        const reqData: IOrderData = {
            total_price: totalPrice,
            order_kind: orderKind,
            receiver: data.receiver,
            receiver_phone_number: phone_number,
            address: data.address,
            address_message: data.message,
            payment_method: data.paymentMethod,
            product_id: undefined,
            quantity: undefined,
        };

        // if (orderKind === 'cart_one_order') {
        //     baseReqData.product_id = 3;
        // }

        console.log('reqData : ', reqData);

        const a = await axiosInstance.post('order/', reqData, {
            headers: getJWTHeader(user),
        });

        console.log('a : ', a);
    };

    const onSubmit = handleSubmit(async (data) => {
        // await orderItemCheck();
        await Promise.all(orderItemCheck());
        console.log('data : ', data);
        order(data, totalPrice, state.order_kind);
    });

    // const onSubmit = async (data: any) => {
    //     // await orderItemCheck();
    //     const a = new Promise(orderItemCheck);
    //     a.then((result) => {
    //         console.log('하이');
    //         console.log(result);
    //     });
    //     // order(data, totalPrice, state.order_kind);
    // };

    // 여기부터 시작
    // 체크된것만 결제페이지 이동
    // is_active는 모두 true인 상태
    // 결제하기 버튼을 누르는 순간 체크된것이 is_active라면 is_active를 true로 변경해주고 체크 안된것들은 is_active를 false로 수정

    return (
        <>
            <Header />
            <Main>
                <H2>주문/결제하기</H2>
                <PaymentInfo>
                    <PaymentHeader>
                        <ProductInfo>상품정보</ProductInfo>
                        <Div>할인</Div>
                        <Div>배송비</Div>
                        <Div>주문금액</Div>
                    </PaymentHeader>
                    <ul>
                        {state.items.map((item) => {
                            return <PaymentItem item={item} />;
                        })}
                    </ul>
                    <Total>
                        <Span>총 주문금액</Span>
                        <TotalPrice>
                            {totalPrice.toLocaleString('ko-KR')}원
                        </TotalPrice>
                    </Total>
                </PaymentInfo>
                <form onSubmit={onSubmit}>
                    <DeliveryInfo register={register} />
                    <Wrapper>
                        <StyledPaymentMethod register={register} />
                        <FinalPayment
                            totalProductPrice={totalProductPrice}
                            totalShippingFee={totalShippingFee}
                            totalPrice={totalPrice}
                        />
                    </Wrapper>
                </form>
            </Main>
        </>
    );
};

export default PaymentPage;
