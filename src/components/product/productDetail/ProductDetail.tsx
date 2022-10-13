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
import { useNavigate } from 'react-router-dom';

function ProductDetail(props: any) {
    const { productID } = props;
    const { data } = useProductDetail(productID);

    const [amount, setAmount] = useState(1);
    const { putCartItem, checkInCart } = usePutCart();

    const navigate = useNavigate();

    const cartItemInfo: ICartItem = {
        quantity: amount,
        product_id: productID,
        check: checkInCart(productID),
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
                    <BuyButton
                        type="button"
                        onClick={() =>
                            navigate('/payment', {
                                state: {
                                    order_kind: 'direct_order',
                                    items: [{ ...data, quantity: amount }],
                                },
                            })
                        }
                    >
                        바로구매
                    </BuyButton>
                    <CartButton
                        type="button"
                        onClick={() => {
                            checkInCart(productID)
                                ? putCartItem(cartItemInfo)
                                : alert('이미잇어요');
                        }}
                    >
                        장바구니
                    </CartButton>
                </ButtonWrapper>
            </Description>
        </Wrapper>
    );
}

export default ProductDetail;
