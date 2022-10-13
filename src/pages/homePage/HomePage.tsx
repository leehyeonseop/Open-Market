import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import ProductList from '../../components/product/productList/ProductList';
import { Main, PageButton } from './HomePage.style';
import { useProduct } from '../../hooks/useProduct';

function HomePage() {
    const { products, maxPage, setCurrentPage } = useProduct();

    return (
        <>
            <Header />
            <Carousel />
            <Main>
                <ProductList products={products} />
                <PageButton
                    count={maxPage}
                    size="large"
                    onChange={(_, page) => setCurrentPage(page)}
                />
            </Main>
        </>
    );
}

export default HomePage;
