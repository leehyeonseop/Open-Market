import {
    MainLogo,
    Nav,
    Search,
    Span,
    StyledLink,
    Wrapper,
} from './Header.style';

import { ReactComponent as UserIcon } from '../../assets/icons/icon-user.svg';
import { ReactComponent as ShoppingCartIcon } from '../../assets/icons/icon-shopping-cart.svg';

function Header() {
    return (
        <Wrapper>
            <MainLogo width={124} height={38} />
            <Search type="search" placeholder="상품을 검색해보세요!" />
            <Nav>
                <StyledLink to="/login">
                    <UserIcon />
                    <Span>로그인</Span>
                </StyledLink>
                <StyledLink to="/login">
                    <ShoppingCartIcon />
                    <Span>장바구니</Span>
                </StyledLink>
            </Nav>
        </Wrapper>
    );
}

export default Header;
