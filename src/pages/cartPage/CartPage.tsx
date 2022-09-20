import { useState, useRef, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import CartItem from '../../components/cartItem/CartItem';
import { TotalPrice } from '../../components/cartItem/CartItem.style';
import Header from '../../components/header/Header';
import { useCart } from '../../hooks/useCart';
import { useProductDetail } from '../../hooks/useProductDetail';
import { Item } from '../../types';
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
    const { cartItems } = useCart();
    cartItems.map((item: any) => console.log('아이템 : ', item));

    const queryClient = useQueryClient();

    const my = queryClient.getQueryData(['product']);
    const my2 = queryClient.getQueryData(['cartItem']);

    console.log('my2 : ', my2);

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
                    {cartItems.map((item: Item) => {
                        return (
                            <CartItem
                                key={item.product_id}
                                product_id={item.product_id}
                                quantity={item.quantity}
                            />
                        );
                    })}
                </CartItemList>
                <CartInfo>
                    <CartInfoSection>
                        총 상품금액
                        <strong>
                            <span>원</span>
                        </strong>
                    </CartInfoSection>
                    <CartInfoSection>
                        상품 할인
                        <strong>
                            0<span>원</span>
                        </strong>
                    </CartInfoSection>
                    <CartInfoSection>
                        배송비
                        <strong>
                            0<span>원</span>
                        </strong>
                    </CartInfoSection>
                    <Payment>
                        결제 예정 금액
                        <strong>
                            46,500<span>원</span>
                        </strong>
                    </Payment>
                </CartInfo>
            </Main>
        </>
    );
}

export default CartPage;
