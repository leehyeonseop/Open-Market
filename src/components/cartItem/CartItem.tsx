import React, { useState } from 'react';
import AmountControl from '../button/AmountControl';
import {
    Amount,
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
    Radio,
    Sellor,
    TotalPrice,
    Wrapper,
} from './CartItem.style';

function CartItem() {
    const [amount, setAmount] = useState(1);

    return (
        <Wrapper>
            <Radio />
            <ProductInfo>
                <Figure>
                    <Image />
                </Figure>
                <Description>
                    <Sellor>위니브</Sellor>
                    <ProductName>마우스</ProductName>
                    <Price>17500원</Price>
                    <Delivery>무료배송</Delivery>
                </Description>
            </ProductInfo>
            <Amount>
                <AmountControl
                    width={100}
                    stock={10}
                    amount={amount}
                    setAmount={setAmount}
                />
            </Amount>
            <ProductPrice>
                <TotalPrice>17,500원</TotalPrice>
                <OrderButton text="주문하기" padding={10}></OrderButton>
            </ProductPrice>
            <DeleteButton />
        </Wrapper>
    );
}

export default CartItem;
