import CartItem from '../cartItem/CartItem';
import { CartItemList } from './CartList.style';
import { useState } from 'react';
import ModalPortal from '../../../modalPortal';
import Modal from '../../modal/Modal';
import AmountControl from '../../button/AmountControl';

const CartList = (props: any) => {
    const { cartItems, checkboxRefs } = props;

    const [modalOpen, setModalOpen] = useState(false);
    const [amount, setAmount] = useState(0);

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
                        setModalOpen={setModalOpen}
                    />
                ))}
            </CartItemList>
            {modalOpen && (
                <ModalPortal>
                    <Modal />
                </ModalPortal>
            )}
        </>
    );
};

export default CartList;
