import { useState, ForwardedRef, forwardRef } from 'react';
import { useRecoilValue } from 'recoil';
import { cartItemState } from '../../../atom';
import AmountControl from '../../button/AmountControl';
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
    const { product_id, quantity, setModalOpen } = props;

    const [amount, setAmount] = useState(quantity);

    const cartItem = useRecoilValue(cartItemState);

    const cartItemData = cartItem.find(
        (element) => element.product_id === product_id,
    );

    return (
        <>
            {cartItemData && (
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
                        <OrderButton text="주문하기" padding={10}></OrderButton>
                    </ProductPrice>
                    <DeleteButton />
                </Wrapper>
            )}
        </>
    );
}

export default forwardRef(CartItem);
