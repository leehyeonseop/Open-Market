import { useRecoilState, useRecoilValue } from 'recoil';
import {
    cartItemsState,
    cartItemState,
    cartItemState2,
    myAtom,
    myAtom2,
    mySelector,
} from '../../atom';
import { CartInfoSection, Payment, Wrapper } from './CartInfo.style';

function CartInfo() {
    const [cartItem, setCartItem] = useRecoilState(cartItemState);

    let totalPrice = 0;
    let shippingFee = 0;

    cartItem.forEach((element) => {
        shippingFee += element.shipping_fee;
        totalPrice += element.price * element.quantity;
    });

    let payment = totalPrice + shippingFee;

    const cartItemsList = useRecoilValue(cartItemState2);

    console.log('인포페이지에서 : ', cartItemsList);

    return (
        <Wrapper>
            <CartInfoSection>
                총 상품금액
                <strong>
                    {totalPrice.toLocaleString('ko-KR')}
                    <span>원</span>
                </strong>
            </CartInfoSection>
            <CartInfoSection>
                상품 할인
                <strong>
                    0<span>원</span>
                </strong>
            </CartInfoSection>
            <CartInfoSection>
                배송비
                <strong>
                    {shippingFee.toLocaleString('ko-KR')}
                    <span>원</span>
                </strong>
            </CartInfoSection>
            <Payment>
                결제 예정 금액
                <strong>
                    {payment.toLocaleString('ko-KR')}
                    <span>원</span>
                </strong>
            </Payment>
        </Wrapper>
    );
}

export default CartInfo;
