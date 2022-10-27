import { useForm } from 'react-hook-form';
import { ScrollRestoration } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
import Success from '../../components/success/Success';
import { useOrder } from '../../hooks/useOrder';
import { IState } from '../../types';
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
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm();
    const { orderItem, orderItemCheck, open, setOpen } = useOrder();

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

    const onSubmit = handleSubmit(async (data) => {
        const orderData = {
            data: data,
            totalPrice: totalPrice,
            orderKind: orderKind,
            items: items,
        };

        if (orderKind !== 'direct_order') {
            const promiseList = orderItemCheck(items, cartItems);
            await Promise.all(promiseList);
        }
        orderItem(orderData);
    });

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
                            return (
                                <PaymentItem
                                    key={item.product_id}
                                    item={item}
                                />
                            );
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
                            isValid={isValid}
                            totalProductPrice={totalProductPrice}
                            totalShippingFee={totalShippingFee}
                            totalPrice={totalPrice}
                        />
                    </Wrapper>
                </form>
            </Main>
            <Success
                open={open}
                setOpen={setOpen}
                message="주문이 완료되었습니다."
            />
        </>
    );
};

export default PaymentPage;
