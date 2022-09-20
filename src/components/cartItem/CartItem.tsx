import React, { useState } from 'react';
import { useProductDetail } from '../../hooks/useProductDetail';
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

function CartItem(props: any) {
    const { product_id, quantity } = props;

    const [amount, setAmount] = useState(quantity);
    const { data } = useProductDetail(product_id);

    return (
        <Wrapper>
            <Radio />
            <ProductInfo>
                <Figure style={{ backgroundImage: `url(${data.image})` }}>
                    <Image />
                </Figure>
                <Description>
                    <Sellor>{data.store_name}</Sellor>
                    <ProductName>{data.product_name}</ProductName>
                    <Price>
                        {data.price && data.price.toLocaleString('ko-KR')}원
                    </Price>
                    <Delivery>
                        {data.shipping_method} {data.shipping_fee}
                    </Delivery>
                </Description>
            </ProductInfo>
            <Amount>
                <AmountControl
                    width={100}
                    stock={data.stock}
                    amount={amount}
                    setAmount={setAmount}
                />
            </Amount>
            <ProductPrice>
                <TotalPrice>
                    {(data.price * amount).toLocaleString('ko-KR')}원
                </TotalPrice>
                <OrderButton text="주문하기" padding={10}></OrderButton>
            </ProductPrice>
            <DeleteButton />
        </Wrapper>
    );
}

export default CartItem;
