import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/Header';
import ProductDetail from '../../components/product/productDetail/ProductDetail';
import { Main } from './ProductDetailPage.style';

function ProductDetailPage() {
    const { productID } = useParams();

    return (
        <>
            <ScrollRestoration />
            <Header />
            <Main>
                <ProductDetail productID={productID} />
            </Main>
        </>
    );
}

export default ProductDetailPage;
