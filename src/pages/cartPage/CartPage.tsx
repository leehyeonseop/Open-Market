import React from 'react';
import CartItem from '../../components/cartItem/CartItem';
import Header from '../../components/header/Header';
import {
    CartHeader,
    H2,
    Main,
    Radio,
    ProductInfo,
    ProductPrice,
    Amount,
    CartItemList,
    CartInfo,
    CartInfoSection,
    Payment,
} from './CartPage.style';

function CartPage() {
    return (
        <>
            <Header />
            <Main>
                <H2>장바구니</H2>
                <CartHeader>
                    <Radio />
                    <ProductInfo>상품정보</ProductInfo>
                    <Amount>수량</Amount>
                    <ProductPrice>상품금액</ProductPrice>
                </CartHeader>
                <CartItemList>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </CartItemList>
                <CartInfo>
                    <CartInfoSection>
                        총 상품금액
                        <strong>46,500<span>원</span></strong>
                    </CartInfoSection>
                    <CartInfoSection>
                        상품 할인
                        <strong>0<span>원</span></strong>
                    </CartInfoSection>
                    <CartInfoSection>
                        배송비
                        <strong>0<span>원</span></strong>
                    </CartInfoSection>
                    <Payment>
                        결제 예정 금액
                        <strong>46,500<span>원</span></strong>
                    </Payment>
                </CartInfo>
            </Main>
        </>
    );
}

export default CartPage;
