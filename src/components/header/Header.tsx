import {
    MainLogo,
    Nav,
    Search,
    ShoppingCart,
    Span,
    StyledLink,
    User,
    Wrapper,
} from './Header.style';

function Header() {
    return (
        <Wrapper>
            <MainLogo width={124} height={38} />
            <Search type="search" placeholder="상품을 검색해보세요!" />
            <Nav>
                <StyledLink to="/login">
                    <User />
                    <Span>로그인</Span>
                </StyledLink>
                <StyledLink to="/login">
                    <ShoppingCart />
                    <Span>장바구니</Span>
                </StyledLink>
            </Nav>
        </Wrapper>
    );
}

export default Header;
