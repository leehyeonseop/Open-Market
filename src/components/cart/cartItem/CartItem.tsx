import { useState, ForwardedRef, forwardRef } from 'react';
import { useCartDelete } from '../../../hooks/useCartDelete';
import ModalPortal from '../../../modalPortal';
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

function CartItem(props: any, ref: ForwardedRef<HTMLInputElement>) {
    const { product_id, quantity, cart_item_id, is_active, details } = props;

    const [amount, setAmount] = useState(quantity);
    const [modalOpen, setModalOpen] = useState(false);

    const deleteItem = useCartDelete();

    return (
        <>
            {/* {cartItemData && (
                <Wrapper>
                    <Checkbox ref={ref} name={'check-item'} />
                    <ProductInfo>
                        <Figure
                            style={{
                                backgroundImage: `url(${cartItemData.image})`,
                            }}
                        >
                            <Image />
                        </Figure>
                        <Description>
                            <Sellor>{cartItemData.store_name}</Sellor>
                            <ProductName>
                                {cartItemData.product_name}
                            </ProductName>
                            <Price>
                                {cartItemData.price &&
                                    cartItemData.price.toLocaleString('ko-KR')}
                                원
                            </Price>
                            <Delivery>
                                {cartItemData.shipping_method}{' '}
                                {cartItemData.shipping_fee}
                            </Delivery>
                        </Description>
                    </ProductInfo>
                    <Amount>
                        <AmountControl
                            width={100}
                            stock={cartItemData.stock}
                            amount={amount}
                            setAmount={setAmount}
                            onClick={() => {
                                setModalOpen((prev: any) => !prev);
                            }}
                        />
                    </Amount>
                    <ProductPrice>
                        <TotalPrice>
                            {(cartItemData.price * amount).toLocaleString(
                                'ko-KR',
                            )}
                            원
                        </TotalPrice>
                        <OrderButton
                            type="button"
                            text="주문하기"
                            padding={10}
                        ></OrderButton>
                    </ProductPrice>
                    <DeleteButton onClick={() => deleteItem(cart_item_id)} />
                    {modalOpen && (
                        <ModalPortal>
                            <Modal
                                setModalOpen={setModalOpen}
                                amount={amount}
                                setAmount={setAmount}
                                stock={cartItemData.stock}
                                quantity={quantity}
                                cart_item_id={cart_item_id}
                                is_active={is_active}
                                product_id={product_id}
                            />
                        </ModalPortal>
                    )}
                </Wrapper>
            )} */}
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
