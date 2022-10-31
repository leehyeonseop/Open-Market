import { ICartItemData, ICartListProps } from '../../../types';
import CartItem from '../cartItem/CartItem';
import { CartItemList } from './CartList.style';

const CartList = (props: ICartListProps) => {
    const { cartItems, checkboxRefs, cartItemsDetailList } = props;

    return (
        <>
            <CartItemList>
                {cartItems.map((item: ICartItemData, index: number) => (
                    <CartItem
                        key={item.product_id}
                        cartItems={cartItems}
                        {...item}
                        details={cartItemsDetailList[index].data}
                        ref={checkboxRefs[index]}
                    />
                ))}
            </CartItemList>
        </>
    );
};

export default CartList;
