import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { cartItemState, checkedCartItemState } from '../../atom';
import { useCart } from '../../hooks/useCart';
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
    const { data } = useProductDetail(product_id, quantity);
    const { deleteCartItem, addCartItem } = useCart();

    const [cartItem, setCartItem] = useRecoilState(cartItemState);
    const [checkedCartItem, setCheckedCartItem] =
        useRecoilState(checkedCartItemState);

    // console.log('현재 카트 아이템에서 : ', cartItem);

    const [itemChecked, setChecked] = useState(true);

    const checkHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        setChecked(!itemChecked);
    };

    useEffect(() => {
        if (itemChecked === false) {
            console.log('체크해제');
            deleteCartItem(product_id);
        }

        if (itemChecked === true) {
            // console.log('처음에는 이거 실행되겠죠?');
            addCartItem(product_id);
        }
    }, [itemChecked]);

    useEffect(() => {
        // console.log('삭제하고 난후 아이템 : ', cartItem);
    }, [cartItem]);

    useEffect(() => {
        if (itemChecked === true) {
            console.log('전체 데이터 : ', cartItem);
            const targetData = cartItem.find(
                (element) => element.product_id === product_id,
            );
            console.log('타겟 데이터 : ', targetData);

            // setCheckedCartItem((prev) => {
            //     [...prev];
            // });
        }
    }, [itemChecked]);

    return (
        <Wrapper>
            <Radio checked={itemChecked} onChange={(e) => checkHandler(e)} />
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
