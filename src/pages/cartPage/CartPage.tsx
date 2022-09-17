import React from 'react';
import Header from '../../components/header/Header';
import {
    CartHeader,
    H2,
    Main,
    Radio,
    ProductInfo,
    ProductPrice,
    Amount,
} from './CartPage.style';

function CartPage() {
    return (
        <>
            <Header />
            <Main>
                <H2>장바구니</H2>
                <CartHeader>
                    <Radio />
                    <ProductInfo></ProductInfo>
                    <Amount></Amount>
                    <ProductPrice></ProductPrice>
                </CartHeader>
            </Main>
        </>
    );
}

export default CartPage;
