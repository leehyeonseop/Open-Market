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
    const cartItemList = useRef<HTMLUListElement>(null)

    const [checkedItems, setCheckedItems] = useState(new Set())

    const checkedItemHandler = (data : any, isChecked : any) => {
        if (isChecked) {
            checkedItems.add(data);
            setCheckedItems(checkedItems)
        } else if (!isChecked && checkedItems.has(data)) {
            checkedItems.delete(data);
            setCheckedItems(checkedItems)
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
                    {/* <Radio onChange={(e) => {
                        const checkBoxList = cartItemList.current?.getElementsByTagName('input')
                        Array.prototype.forEach.call(checkBoxList, (checkBox) => {
                            e.target.checked ? checkBox.checked = true : checkBox.checked = false
                        })
                    }}/> */}
                    <Radio />
                    <ProductInfo>상품정보</ProductInfo>
                    <Amount>수량</Amount>
                    <ProductPrice>상품금액</ProductPrice>
                </CartHeader>
                <CartItemList ref={cartItemList}>
                    {cartItems.map((item: Item) => {
                        return (
                            <CartItem
                                checkedItemHandler={checkedItemHandler}
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
