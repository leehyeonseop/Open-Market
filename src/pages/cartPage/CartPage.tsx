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

import { CartItem2 } from '../../types'

function CartPage() {
    const { cartItems } = useCart();

    const [checkedItems, setCheckedItems] = useState<CartItem2[]>([])

    const handleCheckItems = (data : CartItem2, isChecked : boolean) => {
        if(isChecked) {
            setCheckedItems((prev) => [...prev, data])
        } else {
            setCheckedItems(checkedItems.filter((element) => element !== data))
        }
    }

    useEffect(() => {
        console.log('체크된 아이템들 : ', checkedItems)
    },[checkedItems])



    return (
        <>
            <Header />
            <Main>
                <H2>장바구니</H2>
                <CartHeader>
                    <Radio checked/>
                    <ProductInfo>상품정보</ProductInfo>
                    <Amount>수량</Amount>
                    <ProductPrice>상품금액</ProductPrice>
                </CartHeader>
                <CartItemList>
                    {cartItems.map((item: Item) => {
                        return (
                            <CartItem
                            handleCheckItems={handleCheckItems}
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
