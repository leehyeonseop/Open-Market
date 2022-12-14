import { useState, ForwardedRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartModify } from '../../../hooks/useCartModify';
import { useCartDelete } from '../../../hooks/useCartDelete';
import { getUser } from '../../../localStorage';
import ModalPortal from '../../../modalPortal';
import { ICartItemProps, IModifyData } from '../../../types';
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

function CartItem(props: ICartItemProps, ref: ForwardedRef<HTMLInputElement>) {
    const {
        product_id,
        quantity,
        cart_item_id,
        is_active,
        details,
        cartItems,
    } = props;

    const [amount, setAmount] = useState(quantity);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const user = getUser();
    const navigate = useNavigate();
    const deleteItem = useCartDelete();
    const modify = useCartModify();

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

    const modifyData: IModifyData = {
        user: user,
        cart_item_id: cart_item_id,
        product_id: product_id,
        is_active: is_active,
        amount: amount,
    };

    return (
        <>
            {details && (
                <Wrapper>
                    <Checkbox ref={ref} name={'check-item'} />
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
                                ???
                            </Price>
                            <Delivery>
                                {details.shipping_method} {details.shipping_fee}
                            </Delivery>
                        </Description>
                    </ProductInfo>
                    <Amount>
                        <AmountControl
                            stock={details.stock}
                            amount={amount}
                            setAmount={setAmount}
                            onClick={() => {
                                setModalOpen((prev: boolean) => !prev);
                            }}
                        />
                    </Amount>
                    <ProductPrice>
                        <TotalPrice>
                            {(details.price * amount).toLocaleString('ko-KR')}???
                        </TotalPrice>
                        <OrderButton
                            type="button"
                            text="????????????"
                            padding={10}
                            onClick={goPaymentPage}
                        ></OrderButton>
                    </ProductPrice>
                    <DeleteButton onClick={() => setDeleteModalOpen(true)} />
                    {modalOpen && (
                        <ModalPortal>
                            <Modal
                                MainContent={
                                    <AmountControl
                                        stock={details.stock}
                                        amount={amount}
                                        setAmount={setAmount}
                                    />
                                }
                                positiveOnClick={async () => {
                                    modify(modifyData);
                                    setModalOpen(false);
                                }}
                                positiveText="??????"
                                negativeOnClick={() => {
                                    setAmount(quantity);
                                    setModalOpen(false);
                                }}
                                negativeText="??????"
                            />
                        </ModalPortal>
                    )}
                    {deleteModalOpen && (
                        <ModalPortal>
                            <Modal
                                MainContent={<p>????????? ?????????????????????????</p>}
                                positiveOnClick={async () => {
                                    deleteItem(cart_item_id);
                                    setDeleteModalOpen(false);
                                }}
                                positiveText="??????"
                                negativeOnClick={() => {
                                    setDeleteModalOpen(false);
                                }}
                                negativeText="??????"
                            />
                        </ModalPortal>
                    )}
                </Wrapper>
            )}
        </>
    );
}

export default forwardRef(CartItem);
