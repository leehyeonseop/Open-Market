import { Wrapper } from './Nav.style';

const Nav = () => {
    return (
        <Wrapper>
            <ul>
                <li>
                    <button type="button">판매중인 상품</button>
                </li>
                <li>
                    <button type="button">주문/배송</button>
                </li>
                <li>
                    <button type="button">문의/리뷰</button>
                </li>
                <li>
                    <button type="button">통계</button>
                </li>
                <li>
                    <button type="button">스토어 설정</button>
                </li>
            </ul>
        </Wrapper>
    );
};

export default Nav;
