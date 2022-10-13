import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import ProductList from '../../components/product/productList/ProductList';
import { Main, PageButton } from './HomePage.style';
import { useProduct } from '../../hooks/useProduct';
import { ScrollRestoration } from 'react-router-dom';

function HomePage() {
    const { products, maxPage, setCurrentPage } = useProduct();

    return (
        <>
            <ScrollRestoration />
            <Header />
            <Carousel />
            <Main>
                <ProductList products={products} />
                <PageButton
                    count={maxPage}
                    size="large"
                    onChange={(_, page) => {
                        setCurrentPage(page);
                        window.scrollTo(0, 0);
                    }}
                />
            </Main>
        </>
    );
}

export default HomePage;
