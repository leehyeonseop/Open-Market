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

function ProductItem() {
    return (
        <Wrapper>
            <Figure
                style={{
                    backgroundImage: `url(https://openmarket.weniv.co.kr/media/products/2022/09/08/coffee-beans-2258874_1280_CmNowom.jpg)`,
                }}
            >
                <Image src="https://openmarket.weniv.co.kr/media/products/2022/09/08/coffee-beans-2258874_1280_CmNowom.jpg" />
            </Figure>
            <Description>
                <Sellor>위니브</Sellor>
                <ProductName>충전기</ProductName>
                <PriceWrapper>
                    <Price>29,000</Price>
                    <Won>원</Won>
                </PriceWrapper>
            </Description>
        </Wrapper>
    );
}

export default ProductItem;
