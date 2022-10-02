import { useRecoilValue } from 'recoil';
import { cartItemState, checkedCartItemState } from '../../atom';
import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
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
    Wrapper,
    StyledPaymentMethod,
} from './PaymentPage.style';

const PaymentPage = () => {
    const checkedItems = useRecoilValue(checkedCartItemState);

    let totalProductPrice = 0;
    let totalShippingFee = 0;

    checkedItems.forEach((item) => {
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
                        {checkedItems.map((item) => {
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
                <DeliveryInfo />
                <Wrapper>
                    <StyledPaymentMethod />
                    <FinalPayment
                        totalProductPrice={totalProductPrice}
                        totalShippingFee={totalShippingFee}
                        totalPrice={totalPrice}
                    />
                </Wrapper>
            </Main>
        </>
    );
};

export default PaymentPage;
