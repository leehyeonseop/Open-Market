import { FieldValues, useForm } from 'react-hook-form';
import { ScrollRestoration } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { axiosInstance, getJWTHeader } from '../../axiosInstance';
import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
import { useModify } from '../../hooks/useModify';
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

    const orderKind = state.order_kind;
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

    const orderItemCheck = () => {
        // 1. 선택된 아이템들의 아이디를 뽑아냅니다.
        const selectedProductIDList = items.map((item: any) => item.product_id);

        // 2. 카트아이템에서 선택된 아이템들을 뽑아낼겁니다.
        const selectedItemList = cartItems.reduce((res: any, ref: any) => {
            if (selectedProductIDList.includes(ref.product_id)) {
                res.push(ref);
            }
            return res;
        }, []);

        // 3 선택되지 아이템들은 is_active를 false로 바꿔줘야하기 때문에 또한 뽑아냅니다.
        const unSelectedItemList = cartItems.reduce((res: any, ref: any) => {
            if (!selectedProductIDList.includes(ref.product_id)) {
                res.push(ref);
            }
            return res;
        }, []);

        // 4. 선택된 아이템이 is_active가 false라면? 안되죠!
        const selectedPromiseList = selectedItemList
            .filter((item: any) => !item.is_active)
            .map((item: any) => {
                const modifyData: IModifyData = {
                    user: user,
                    cart_item_id: item.cart_item_id,
                    product_id: item.product_id,
                    is_active: !item.is_active,
                    amount: item.quantity,
                };
                return modify(modifyData);
            });

        // 5. 선택되지 않은 아이템들은 is_active가 true라면 false로 바꿔줘야 합니다.
        const unselectedPromiseList = unSelectedItemList
            .filter((item: any) => item.is_active)
            .map((item: any) => {
                const modifyData: IModifyData = {
                    user: user,
                    cart_item_id: item.cart_item_id,
                    product_id: item.product_id,
                    is_active: !item.is_active,
                    amount: item.quantity,
                };
                return modify(modifyData);
            });

        const promiseList = selectedPromiseList.concat(unselectedPromiseList);

        return promiseList;
    };

    const order = async (
        data: FieldValues,
        totalPrice: number,
        orderKind: string,
    ) => {
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

        if (orderKind === 'cart_one_order' || 'direct_order') {
            reqData.product_id = items[0].product_id;
            reqData.quantity = items[0].quantity;
        }

        const response = await axiosInstance.post('order/', reqData, {
            headers: getJWTHeader(user),
        });

        console.log('response : ', response);
    };

    const onSubmit = handleSubmit(async (data) => {
        if (orderKind !== 'direct_order') {
            const promiseList = orderItemCheck();
            await Promise.all(promiseList);
        }
        order(data, totalPrice, orderKind);
    });

    // 여기부터 시작

    return (
        <>
            <ScrollRestoration />
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
