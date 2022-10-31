import { useForm } from 'react-hook-form';
import { useOrder } from '../../hooks/useOrder';
import { ScrollRestoration, useNavigate, useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Modal from '../../components/modal/Modal';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
import ModalPortal from '../../modalPortal';
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
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { orderItem, orderItemCheck, open } = useOrder();

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
                    <DeliveryInfo register={register} errors={errors} />
                    <Wrapper>
                        <StyledPaymentMethod
                            register={register}
                            errors={errors}
                        />
                        <FinalPayment
                            totalProductPrice={totalProductPrice}
                            totalShippingFee={totalShippingFee}
                            totalPrice={totalPrice}
                        />
                    </Wrapper>
                </form>
            </Main>
            {open && (
                <ModalPortal>
                    <Modal
                        MainContent={
                            <p>
                                주문이 완료되었습니다.
                                <br />
                                장바구니로 이동하시겠습니까?
                            </p>
                        }
                        positiveOnClick={() => {
                            navigate('/cart');
                        }}
                        positiveText="예"
                        negativeOnClick={() => {
                            navigate('/');
                        }}
                        negativeText="아니요"
                    />
                </ModalPortal>
            )}
        </>
    );
};

export default PaymentPage;
