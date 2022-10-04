import { FieldValues, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import { cartItemState, checkedCartItemState } from '../../atom';
import { axiosInstance, getJWTHeader } from '../../axiosInstance';
import Header from '../../components/header/Header';
import DeliveryInfo from '../../components/payment/deliveryInfo/DeliverInfo';
import FinalPayment from '../../components/payment/finalPayment/FinalPayment';
import PaymentItem from '../../components/payment/paymentItem/PaymentItem';
import { getUser } from '../../localStorage';
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
