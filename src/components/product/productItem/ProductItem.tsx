import {
    Description,
    Figure,
    Image,
    Price,
    PriceWrapper,
    ProductName,
    Sellor,
    Won,
    Wrapper,
} from './ProductItem.style';

function ProductItem(props : any) {

    const { imgURL, store, productName, price } = props

    return (
        <Wrapper>
            <Figure
                style={{
                    backgroundImage: `url(${imgURL})`,
                }}
            >
                <Image src="https://openmarket.weniv.co.kr/media/products/2022/09/08/coffee-beans-2258874_1280_CmNowom.jpg" />
            </Figure>
            <Description>
                <Sellor>{store}</Sellor>
                <ProductName>{productName}</ProductName>
                <PriceWrapper>
                    <Price>{price}</Price>
                    <Won>원</Won>
                </PriceWrapper>
            </Description>
        </Wrapper>
    );
}

export default ProductItem;
