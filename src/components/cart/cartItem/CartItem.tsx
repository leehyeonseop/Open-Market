import { useState, ForwardedRef, forwardRef } from 'react';
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

    const [amount, setAmount] = useState(quantity);
    const [modalOpen, setModalOpen] = useState(false);
    const [deleteModalOpen, setDeleteModalOpen] = useState(false);

    const navigate = useNavigate();
    const user = getUser();
    const deleteItem = useCartDelete();
    const modify = useModify();

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
                            원
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
                            positiveText="수정"
                            negativeOnClick={() => {
                                setAmount(quantity);
                                setModalOpen(false);
                            }}
                            negativeText="취소"
                        />
                    </ModalPortal>
                )}
                {deleteModalOpen && (
                    <ModalPortal>
                        <Modal
                            MainContent={<p>상품을 삭제하시겠습니까?</p>}
                            positiveOnClick={async () => {
                                deleteItem(cart_item_id);
                                setDeleteModalOpen(false);
                            }}
                            positiveText="확인"
                            negativeOnClick={() => {
                                setDeleteModalOpen(false);
                            }}
                            negativeText="취소"
                        />
                    </ModalPortal>
                )}
            </Wrapper>
        </>
    );
}

export default forwardRef(CartItem);
