import React from 'react';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import ProductList from '../../components/product/productList/ProductList';
import { Main } from './HomePage.style';

function HomePage() {
    return (
        <>
            <Header />
            <Carousel />
            <Main>
                <ProductList />
            </Main>
        </>
    );
}

export default HomePage;
