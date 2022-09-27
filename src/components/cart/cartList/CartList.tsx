import CartItem from '../cartItem/CartItem';
import { CartItemList } from './CartList.style';

const CartList = (props: any) => {
    const { cartItems, checkboxRefs } = props;

    return (
        <CartItemList>
            {cartItems.map((item: any, index: number) => (
                <CartItem
                    key={item.product_id}
                    product_id={item.product_id}
                    quantity={item.quantity}
                    ref={checkboxRefs[index]}
                />
            ))}
        </CartItemList>
    );
};

export default CartList;
