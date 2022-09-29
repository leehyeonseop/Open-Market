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

const PaymentItem = () => {
    return (
        <Wrapper>
            <ProductInfo>
                <Figure>
                    <Image />
                </Figure>
                <Description>
                    <Store>위니브</Store>
                    <ProductName>마우스</ProductName>
                    <Amount>수량 : 1개</Amount>
                </Description>
            </ProductInfo>
            <Discount>-</Discount>
            <DeliveryFee>무료배송</DeliveryFee>
            <Price>17,500원</Price>
        </Wrapper>
    );
};

export default PaymentItem;
