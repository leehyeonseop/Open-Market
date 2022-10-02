import { ICartItemDetail } from '../../../types';
import {
    Amount,
    DeliveryFee,
    Description,
    Discount,
    Figure,
    Image,
    Price,
    ProductInfo,
    ProductName,
    Store,
    Wrapper,
} from './PaymentItem.style';

interface IPaymentItem {
    item: ICartItemDetail;
}

const PaymentItem = (props: IPaymentItem) => {
    const { item } = props;

    const totalPrice = (item.quantity * item.price).toLocaleString('ko-KR');

    return (
        <Wrapper>
            <ProductInfo>
                <Figure style={{ backgroundImage: `url(${item.image})` }}>
                    <Image />
                </Figure>
                <Description>
                    <Store>{item.store_name}</Store>
                    <ProductName>{item.product_name}</ProductName>
                    <Amount>수량 : {item.quantity}개</Amount>
                </Description>
            </ProductInfo>
            <Discount>-</Discount>
            <DeliveryFee>{item.shipping_fee}</DeliveryFee>
            <Price>{totalPrice}원</Price>
        </Wrapper>
    );
};

export default PaymentItem;
