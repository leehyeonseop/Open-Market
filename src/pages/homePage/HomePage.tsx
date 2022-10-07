import { useState } from 'react';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import ProductList from '../../components/product/productList/ProductList';
import { ButtonWrapper, Main, NextButton, PrevButton } from './HomePage.style';
import { useProduct } from '../../hooks/useProduct';

function HomePage() {
    const { products, maxPage, currentPage, setCurrentPage } = useProduct();

    return (
        <>
            <Header />
            <Carousel />
            <Main>
                <ProductList products={products} />
                <ButtonWrapper>
                    <PrevButton
                        text="이전페이지"
                        type="button"
                        padding={10}
                        disabled={currentPage <= 1}
                        onClick={() => {
                            setCurrentPage((prev) => prev - 1);
                        }}
                    />

                    <NextButton
                        text="다음페이지"
                        type="button"
                        padding={10}
                        disabled={currentPage >= maxPage}
                        onClick={() => {
                            setCurrentPage((prev) => prev + 1);
                        }}
                    />
                </ButtonWrapper>
            </Main>
        </>
    );
}

export default HomePage;
