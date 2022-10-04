import { useProductDetail } from '../../../hooks/useProductDetail';
import {
    Amount,
    AmountButton,
    ButtonWrapper,
    BuyButton,
    CartButton,
    Count,
    Delivery,
    Description,
    Figure,
    Image,
    Price,
    PriceWrapper,
    ProductName,
    Sellor,
    Span,
    StyledAmountControl,
    TotalAmount,
    TotalNumber,
    TotalPrice,
    TotalWon,
    TotalWrapper,
    Won,
    Wrapper,
} from './ProductDetail.style';

import { useState } from 'react';
import { ICartItem } from '../../../types';
import { useCart } from '../../../hooks/useCart';
import { usePutCart } from '../../../hooks/usePutCart';

function ProductDetail(props: any) {
    const { productID } = props;
    const { data } = useProductDetail(productID);

    console.log('재곡 : ', data);

    const [amount, setAmount] = useState(1);

    const { cartItems } = useCart();
    const { putCartItem, checkInCart } = usePutCart();

    const cartItemInfo: ICartItem = {
        quantity: amount,
        product_id: productID,
        check: checkInCart(productID, cartItems),
    };

    return (
        <Wrapper>
            <Figure
                style={{
                    backgroundImage: `url(${data.image})`,
                }}
            >
                <Image />
            </Figure>
            <Description>
                <Sellor>{data.store_name}</Sellor>
                <ProductName>{data.product_name}</ProductName>
                <PriceWrapper>
                    <Price>
                        {data.price && data.price.toLocaleString('ko-KR')}
                    </Price>
                    <Won>원</Won>
                </PriceWrapper>
                <Delivery>택배배송 / 무료배송</Delivery>
                <StyledAmountControl
                    width={23.80952380952381}
                    stock={data.stock}
                    amount={amount}
                    setAmount={setAmount}
                />
                <TotalWrapper>
                    <Span>총 상품 금액</Span>
                    <TotalAmount>
                        총 수량 <TotalNumber>{amount}</TotalNumber>개
                    </TotalAmount>
                    <TotalPrice>
                        {(data.price * amount).toLocaleString('ko-KR')}
                        <TotalWon>원</TotalWon>
                    </TotalPrice>
                </TotalWrapper>
                <ButtonWrapper>
                    <BuyButton text="바로 구매" />
                    <CartButton
                        type="button"
                        text="장바구니"
                        onClick={() => {
                            checkInCart(productID, cartItems)
                                ? putCartItem(cartItemInfo)
                                : alert('이미잇어요');
                        }}
                    />
                </ButtonWrapper>
            </Description>
        </Wrapper>
    );
}

export default ProductDetail;
