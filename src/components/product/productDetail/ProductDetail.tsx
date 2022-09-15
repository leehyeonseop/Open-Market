import { useProductDetail } from '../hooks/useProductDetail';
import {
    Amount,
    Count,
    Delivery,
    Description,
    Figure,
    Image,
    MinusButton,
    PlusButton,
    Price,
    PriceWrapper,
    ProductName,
    Sellor,
    Won,
    Wrapper,
} from './ProductDetail.style';
import minus from '../../../assets/icons/icon-minus-line.svg';
import plus from '../../../assets/icons/icon-plus-line.svg';

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
                    <MinusButton />
                    <Count />
                    <PlusButton />
                </Amount>
            </Description>
        </Wrapper>
    );
}

export default ProductDetail;
