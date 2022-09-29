import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
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
} from './PaymentPage.style';

const PaymentPage = () => {
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
                    <PaymentItem />
                    <Total>
                        <Span>총 주문금액</Span>
                        <TotalPrice>17,500원</TotalPrice>
                    </Total>
                </PaymentInfo>
                <DeliveryInfo />
            </Main>
        </>
    );
};

export default PaymentPage;
