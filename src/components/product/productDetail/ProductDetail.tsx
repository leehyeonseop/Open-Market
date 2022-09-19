import { useProductDetail } from '../hooks/useProductDetail';
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
import { ReactComponent as Minus } from '../../../assets/icons/icon-minus-line.svg';
import { ReactComponent as Plus } from '../../../assets/icons/icon-plus-line.svg';
import { useState } from 'react';
import AmountControl from '../../button/AmountControl';

function ProductDetail(props: any) {
    const { productID } = props;
    const { data } = useProductDetail(productID);

    const [amount, setAmount] = useState(1);

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
                <Sellor>{data.seller_store}</Sellor>
                <ProductName>{data.product_name}</ProductName>
                <PriceWrapper>
                    <Price>
                        {data.price && data.price.toLocaleString('ko-KR')}
                    </Price>
                    <Won>원</Won>
                </PriceWrapper>
                <Delivery>택배배송 / 무료배송</Delivery>
                {/* <Amount>
                    <AmountButton
                        onClick={() => setAmount((prev) => prev - 1)}
                        disabled={amount <= 1}
                    >
                        <Minus width="auto" height="auto"></Minus>
                    </AmountButton>
                    <Count>{amount}</Count>
                    <AmountButton
                        onClick={() => setAmount((prev) => prev + 1)}
                        disabled={amount >= data.stock}
                    >
                        <Plus width="auto" height="auto"></Plus>
                    </AmountButton>
                </Amount> */}
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
                    <CartButton text="장바구니" />
                </ButtonWrapper>
            </Description>
        </Wrapper>
    );
}

export default ProductDetail;
