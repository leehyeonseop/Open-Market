import { useState, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useQueries } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartItemState, checkedCartItemState } from '../../atom';
import { axiosInstance, getJWTHeader } from '../../axiosInstance';
import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
import { useCart } from '../../hooks/useCart';
import { getProductDetail } from '../../hooks/useProductDetail';
import { getUser } from '../../localStorage';
import { ICartItemDetail } from '../../types';
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

    const order = async (
        data: FieldValues,
        totalPrice: number,
        orderKind: string,
    ) => {
        console.log(totalPrice);

        const user = getUser();

        const phone_number =
            data.startPhoneNum + data.centerPhoneNum + data.endPhoneNum;

        const reqData = {
            total_price: totalPrice,
            order_kind: orderKind,
            receiver: data.receiver,
            receiver_phone_number: phone_number,
            address: data.address,
            address_message: data.message,
            payment_method: data.paymentMethod,
        };

        console.log('reqData : ', reqData);

        const a = await axiosInstance.post('order/', reqData, {
            headers: getJWTHeader(user),
        });

        console.log('a : ', a);
    };

    const onSubmit = handleSubmit((data) => {
        console.log('data : ', data);
        order(data, totalPrice, 'cart_order');
    });

    // 여기부터 시작
    // 체크된것만 결제페이지 이동
    // is_active는 모두 true인 상태
    // 결제하기 버튼을 누르는 순간 체크된것이 is_active라면 is_active를 true로 변경해주고 체크 안된것들은 is_active를 false로 수정

    interface IState {
        order_kind: string;
        items: ICartItemDetail[];
    }

    const location = useLocation();
    const state = location.state as IState;

    console.log(state.items);

    let totalProductPrice = 0;
    let totalShippingFee = 0;

    state.items.forEach((item) => {
        totalProductPrice += item.price * item.quantity;
        totalShippingFee += item.shipping_fee;
    });

    let totalPrice = totalProductPrice + totalShippingFee;

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
