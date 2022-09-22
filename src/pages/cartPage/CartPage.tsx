import { useEffect, useRef, useState } from 'react';
import CartInfo from '../../components/cartInfo/CartInfo';
import CartItem from '../../components/cartItem/CartItem';
import Header from '../../components/header/Header';
import { useCart } from '../../hooks/useCart';
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
} from './CartPage.style';

function CartPage() {
    const { cartItems } = useCart();

    const [isAllChecked, setIsAllChecked] = useState(true);

    const handleAllChange = () => {
        setIsAllChecked((prev) => !prev);
    };

    return (
        <>
            <Header />
            <Main>
                <H2>장바구니</H2>
                <CartHeader>
                    <Radio checked={isAllChecked} onChange={handleAllChange} />
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
                <CartInfo />
            </Main>
        </>
    );
}

export default CartPage;
