import React from 'react'
import Header from '../../components/header/Header'
import ProductDetail from '../../components/product/productDetail/ProductDetail'
import { Main } from './ProductDetailPage.style'

function ProductDetailPage() {
    return (
        <>
            <Header />
            <Main>
                <ProductDetail />
            </Main>
        </>
    )
}

export default ProductDetailPage