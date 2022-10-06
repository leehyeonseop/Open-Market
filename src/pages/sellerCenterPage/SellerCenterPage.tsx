import SellerHeader from '../../components/header/sellerHeader/SellerHeader';
import {
    H2,
    Main,
    ProductUploadButton,
    Wrapper,
} from './SellerCenterPage.style';
import { ReactComponent as Plus } from '../../assets/icons/icon-plus.svg';
import Nav from '../../components/nav/Nav';
import ProductOnSale from '../../components/productOnSale/ProductOnSale';
import { useSellerProduct } from '../../hooks/useSellerProduct';
import { useNavigate } from 'react-router-dom';

const SellerCenterPage = () => {
    const { productOnSaleItems } = useSellerProduct();
    const navigate = useNavigate();

    return (
        <>
            <SellerHeader />
            <Main>
                <Wrapper>
                    <H2>대시보드</H2>
                    <span>백엔드글로벌</span>
                    <ProductUploadButton
                        type="button"
                        onClick={() => navigate('/productRegistration')}
                    >
                        <Plus />
                        <span>상품 업로드</span>
                    </ProductUploadButton>
                </Wrapper>
                <div>
                    <Nav />
                    <ProductOnSale productOnSaleItems={productOnSaleItems} />
                </div>
            </Main>
        </>
    );
};

export default SellerCenterPage;
