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
                        product_id={item.product_id}
                        quantity={item.quantity}
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
