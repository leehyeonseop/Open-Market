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
            </Main>
        </>
    );
}

export default CartPage;
