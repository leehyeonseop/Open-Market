import { useState } from 'react';
import {
    Button,
    MainLogo,
    Nav,
    Search,
    SellerCenterLink,
    Span,
    StyledLink,
    Wrapper,
} from './Header.style';

import { ReactComponent as UserIcon } from '../../assets/icons/icon-user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/icon-shopping-cart.svg';
import { ReactComponent as ShoppingBagIcon } from '../../assets/icons/icon-shopping-bag.svg';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../localStorage';
import DropDown from '../dropDown/DropDown';

function Header() {
    const navigate = useNavigate();
    const user = getUser();

    const [dropDown, setDropDown] = useState(false);

    const isUser = () => {
        if (!user) {
            alert('로그인한 유저만 이용 가능합니다!');
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
                            <ShoppingCartIcon />
                            <Span>장바구니</Span>
                        </Button>
                        <StyledLink to="/login">
                            <UserIcon />
                            <Span>로그인</Span>
                        </StyledLink>
                    </>
                )}
                {user && user.user_type === 'BUYER' && (
                    <>
                        <StyledLink to="/cart">
                            <ShoppingCartIcon />
                            <Span>장바구니</Span>
                        </StyledLink>
                        <Button onClick={() => setDropDown((prev) => !prev)}>
                            <UserIcon />
                            <Span>마이페이지</Span>
                            <DropDown dropDown={dropDown} />
                        </Button>
                    </>
                )}
                {user && user.user_type === 'SELLER' && (
                    <>
                        <Button onClick={() => setDropDown((prev) => !prev)}>
                            <UserIcon />
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
        </Wrapper>
    );
}

export default Header;
