import React from 'react'
import { Description, Figure, Image, Wrapper } from './ProductDetail.style'

function ProductDetail() {
    return (
        <Wrapper>
            <Figure style={{backgroundImage : `url(https://openmarket.weniv.co.kr/media/products/2022/09/07/%ED%98%BC%EA%B3%B5%EC%9E%90%EC%8A%A4.jpg)`}}>
                <Image />
            </Figure>
            <Description>
                
            </Description>
        </Wrapper>
    )
}

export default ProductDetail