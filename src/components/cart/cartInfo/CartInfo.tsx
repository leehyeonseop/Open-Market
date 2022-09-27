import { useRecoilValue } from 'recoil';
import { checkedCartItemState } from '../../../atom';
import { CartInfoSection, Payment, Wrapper } from './CartInfo.style';

function CartInfo() {
    const checkedCartItems = useRecoilValue(checkedCartItemState);

    let totalPrice = 0;
    let shippingFee = 0;

    checkedCartItems.forEach((element) => {
        shippingFee += element.shipping_fee;
        totalPrice += element.price * element.quantity;
    });

    let payment = totalPrice + shippingFee;

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
