import SellerHeader from '../../components/header/sellerHeader/SellerHeader';
import {
    H2,
    Main,
    ProductUploadButton,
    Wrapper,
} from './SellorCenterPage.style';
import { ReactComponent as Plus } from '../../assets/icons/icon-plus.svg';
import Nav from '../../components/nav/Nav';
import ProductOnSale from '../../components/productOnSale/ProductOnSale';

const SellerCenterPage = () => {
    return (
        <>
            <SellerHeader />
            <Main>
                <Wrapper>
                    <H2>대시보드</H2>
                    <span>백엔드글로벌</span>
                    <ProductUploadButton>
                        <Plus />
                        <span>상품 업로드</span>
                    </ProductUploadButton>
                </Wrapper>
                <Nav />
                <ProductOnSale />
            </Main>
        </>
    );
};

export default SellerCenterPage;
