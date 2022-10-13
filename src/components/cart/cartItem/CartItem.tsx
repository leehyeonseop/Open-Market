import { useState, useEffect, ForwardedRef, forwardRef } from 'react';
import { useModify } from '../../../hooks/useModify';
import { useCartDelete } from '../../../hooks/useCartDelete';
import { getUser } from '../../../localStorage';
import ModalPortal from '../../../modalPortal';
import { IModifyData } from '../../../types';
import AmountControl from '../../button/AmountControl';
import Modal from '../../modal/Modal';
import {
    Amount,
    Checkbox,
    DeleteButton,
    Delivery,
    Description,
    Figure,
    Image,
    OrderButton,
    Price,
    ProductInfo,
    ProductName,
    ProductPrice,
    Sellor,
    TotalPrice,
    Wrapper,
} from './CartItem.style';
import { useNavigate } from 'react-router-dom';

function CartItem(props: any, ref: ForwardedRef<HTMLInputElement>) {
    const {
        product_id,
        quantity,
        cart_item_id,
        is_active,
        details,
        cartItems,
    } = props;

    // const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(quantity);
    const [modalOpen, setModalOpen] = useState(false);
    // const [active, setActive] = useState<boolean>(is_active);

    const user = getUser();
    // const modifyData: IModifyData = {
    //     user: user,
    //     cart_item_id: cart_item_id,
    //     product_id: product_id,
    //     is_active: active,
    //     amount: quantity,
    // };

    const deleteItem = useCartDelete();
    // const modify = useModify();

    // useEffect(() => {
    //     if (count >= 1) {
    //         modify(modifyData);
    //     }
    // }, [active]);

    // useEffect(() => {
    //     setActive(is_active);
    // }, [is_active]);

    const navigate = useNavigate();

    const goPaymentPage = () => {
        const newDetails = Object.assign({}, details);
        newDetails.quantity = quantity;

        navigate('/payment', {
            state: {
                order_kind: 'cart_one_order',
                items: [newDetails],
                cartItems: cartItems,
            },
        });
    };

    return (
        <>
            <Wrapper>
                <Checkbox
                    ref={ref}
                    // checked={active}
                    name={'check-item'}
                    // onChange={() => {
                    //     setCount((prev: number) => prev + 1);
                    //     setActive((prev: boolean) => !prev);
                    // }}
                />
                <ProductInfo>
                    <Figure
                        style={{
                            backgroundImage: `url(${details.image})`,
                        }}
                    >
                        <Image />
                    </Figure>
                    <Description>
                        <Sellor>{details.store_name}</Sellor>
                        <ProductName>{details.product_name}</ProductName>
                        <Price>
                            {details.price &&
                                details.price.toLocaleString('ko-KR')}
                            원
                        </Price>
                        <Delivery>
                            {details.shipping_method} {details.shipping_fee}
                        </Delivery>
                    </Description>
                </ProductInfo>
                <Amount>
                    <AmountControl
                        width={100}
                        stock={details.stock}
                        amount={amount}
                        setAmount={setAmount}
                        onClick={() => {
                            setModalOpen((prev: any) => !prev);
                        }}
                    />
                </Amount>
                <ProductPrice>
                    <TotalPrice>
                        {(details.price * amount).toLocaleString('ko-KR')}원
                    </TotalPrice>
                    <OrderButton
                        type="button"
                        text="주문하기"
                        padding={10}
                        onClick={goPaymentPage}
                    ></OrderButton>
                </ProductPrice>
                <DeleteButton onClick={() => deleteItem(cart_item_id)} />
                {modalOpen && (
                    <ModalPortal>
                        <Modal
                            setModalOpen={setModalOpen}
                            amount={amount}
                            setAmount={setAmount}
                            stock={details.stock}
                            quantity={quantity}
                            cart_item_id={cart_item_id}
                            is_active={is_active}
                            product_id={product_id}
                        />
                    </ModalPortal>
                )}
            </Wrapper>
        </>
    );
}

export default forwardRef(CartItem);
