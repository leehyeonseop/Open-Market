import { useState } from 'react';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import ProductList from '../../components/product/productList/ProductList';
import { ButtonWrapper, Main, NextButton, PrevButton } from './HomePage.style';

function HomePage() {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <>
            <Header />
            <Carousel />
            <Main>
                <ProductList currentPage={currentPage} />
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
                        disabled={currentPage >= 2}
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
