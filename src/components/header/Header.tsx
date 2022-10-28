import { useState } from 'react';
import {
    Button,
    MainLogo,
    Nav,
    Search,
    SellerCenterLink,
    Span,
    StyledLink,
    StyledShoppingCartIcon,
    StyledUserIcon,
    Wrapper,
} from './Header.style';

import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/icon-shopping-bag.svg';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../localStorage';
import DropDown from '../dropDown/DropDown';
import ModalPortal from '../../modalPortal';
import Modal from '../modal/Modal';

function Header() {
    const navigate = useNavigate();
    const user = getUser();

    const [dropDown, setDropDown] = useState(false);
    const [loginModalOpen, setLoginModalOpen] = useState(false);

    const isUser = () => {
        if (!user) {
            setLoginModalOpen(true);
            return;
        } else {
            navigate('/cart');
        }
    };

    return (
        <Wrapper>
            <MainLogo width={124} height={38} onClick={() => navigate('/')} />
            <Search type="search" placeholder="상품을 검색해보세요!" />
            <Nav>
                {user === null && (
                    <>
                        <Button onClick={isUser}>
                            <StyledShoppingCartIcon />
                            <Span>장바구니</Span>
                        </Button>
                        <StyledLink to="/login">
                            <StyledUserIcon />
                            <Span>로그인</Span>
                        </StyledLink>
                    </>
                )}
                {user && user.user_type === 'BUYER' && (
                    <>
                        <StyledLink to="/cart">
                            <StyledShoppingCartIcon />
                            <Span>장바구니</Span>
                        </StyledLink>
                        <Button onClick={() => setDropDown((prev) => !prev)}>
                            <StyledUserIcon />
                            <Span>마이페이지</Span>
                            <DropDown dropDown={dropDown} />
                        </Button>
                    </>
                )}
                {user && user.user_type === 'SELLER' && (
                    <>
                        <Button onClick={() => setDropDown((prev) => !prev)}>
                            <StyledUserIcon />
                            <Span>마이페이지</Span>
                            <DropDown dropDown={dropDown} />
                        </Button>
                        <SellerCenterLink to="/sellerCenter">
                            <ShoppingBagIcon />
                            판매자 센터
                        </SellerCenterLink>
                    </>
                )}
            </Nav>
            {loginModalOpen && (
                <ModalPortal>
                    <Modal
                        MainContent={
                            <p>
                                로그인이 필요한 서비스입니다.
                                <br />
                                로그인 하시겠습니까?
                            </p>
                        }
                        positiveOnClick={() => {
                            navigate('/login');
                        }}
                        positiveText="예"
                        negativeOnClick={() => {
                            setLoginModalOpen(false);
                        }}
                        negativeText="아니요"
                    />
                </ModalPortal>
            )}
        </Wrapper>
    );
}

export default Header;
