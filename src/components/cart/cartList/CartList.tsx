import CartItem from '../cartItem/CartItem';
import { CartItemList } from './CartList.style';

const CartList = (props: any) => {
    const { cartItems, checkboxRefs } = props;

    return (
        <>
            <CartItemList>
                {cartItems.map((item: any, index: number) => (
                    <CartItem
                        key={item.product_id}
                        // product_id={item.product_id}
                        // cart_item_id={item.cart_item_id}
                        // is_active={item.is_active}
                        // quantity={item.quantity}
                        {...item}
                        ref={checkboxRefs[index]}
                    />
                ))}
            </CartItemList>
        </>
    );
};

export default CartList;
