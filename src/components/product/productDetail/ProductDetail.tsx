import { useProductDetail } from '../hooks/useProductDetail';
import {
    Amount,
    AmountButton,
    BuyButton,
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

function ProductDetail(props: any) {
    const { productID } = props;
    const { data } = useProductDetail(productID);

    console.log(data);

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
                    <Price>{data.price}</Price>
                    <Won>원</Won>
                </PriceWrapper>
                <Delivery>택배배송 / 무료배송</Delivery>
                <Amount>
                    <AmountButton>
                        <Minus width="auto" height="auto"></Minus>
                    </AmountButton>
                    <Count>999</Count>
                    <AmountButton>
                        <Plus width="auto" height="auto"></Plus>
                    </AmountButton>
                </Amount>
                <TotalWrapper>
                    <Span>총 상품 금액</Span>
                    <TotalAmount>
                        총 수량 <TotalNumber>1</TotalNumber>개
                    </TotalAmount>
                    <TotalPrice>
                        17,500
                        <TotalWon>원</TotalWon>
                    </TotalPrice>
                </TotalWrapper>
                <BuyButton text="구매하기" />
            </Description>
        </Wrapper>
    );
}

export default ProductDetail;
