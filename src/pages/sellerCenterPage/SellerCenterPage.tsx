import { useNavigate } from 'react-router-dom';
import SellerHeader from '../../components/header/sellerHeader/SellerHeader';
import ProductOnSale from '../../components/productOnSale/ProductOnSale';
import Nav from '../../components/nav/Nav';
import { ReactComponent as Plus } from '../../assets/icons/icon-plus.svg';
import {
    H2,
    Main,
    ProductUploadButton,
    Wrapper,
} from './SellerCenterPage.style';

const SellerCenterPage = () => {
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
                        onClick={() =>
                            navigate('/productRegistration', {
                                state: {
                                    mode: 'register',
                                },
                            })
                        }
                    >
                        <Plus />
                        <span>상품 업로드</span>
                    </ProductUploadButton>
                </Wrapper>
                <div>
                    <Nav />
                    <ProductOnSale />
                </div>
            </Main>
        </>
    );
};

export default SellerCenterPage;
