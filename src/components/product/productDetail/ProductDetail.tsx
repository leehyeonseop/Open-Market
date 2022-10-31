import { useState } from 'react';
import { useProductDetail } from '../../../hooks/useProductDetail';
import { usePutCart } from '../../../hooks/usePutCart';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../localStorage';
import Modal from '../../modal/Modal';
import ModalPortal from '../../../modalPortal';
import { ICartItem } from '../../../types';
import {
    ButtonWrapper,
    BuyButton,
    CartButton,
    Delivery,
    Description,
    Figure,
    Image,
    Price,
    PriceWrapper,
    ProductName,
    Sellor,
    Span,
    StyledAmountControl,
    TotalAmount,
    TotalNumber,
    TotalPrice,
    TotalWon,
    TotalWrapper,
    Won,
    Wrapper,
} from './ProductDetail.style';

interface IProductDetailProps {
    productID: string;
}

function ProductDetail(props: IProductDetailProps) {
    const { productID } = props;
    const { data } = useProductDetail(productID);

    const [amount, setAmount] = useState(1);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const { putCartItem, checkInCart, open, setOpen } = usePutCart();
    const user = getUser();

    const navigate = useNavigate();

    const cartItemInfo = {
        quantity: amount,
        product_id: productID,
        check: checkInCart(productID),
    };

    return (
        <Wrapper>
            <Figure
                style={{
                    backgroundImage: `url(${data.image})`,
                }}
            >
                <Image />
            </Figure>
            <Description>
                <Sellor>{data.store_name}</Sellor>
                <ProductName>{data.product_name}</ProductName>
                <PriceWrapper>
                    <Price>
                        {data.price && data.price.toLocaleString('ko-KR')}
                    </Price>
                    <Won>원</Won>
                </PriceWrapper>
                <Delivery>택배배송 / 무료배송</Delivery>
                <StyledAmountControl
                    stock={data.stock}
                    amount={amount}
                    setAmount={setAmount}
                />
                <TotalWrapper>
                    <Span>총 상품 금액</Span>
                    <TotalAmount>
                        총 수량 <TotalNumber>{amount}</TotalNumber>개
                    </TotalAmount>
                    <TotalPrice>
                        {(data.price * amount).toLocaleString('ko-KR')}
                        <TotalWon>원</TotalWon>
                    </TotalPrice>
                </TotalWrapper>
                <ButtonWrapper>
                    <BuyButton
                        type="button"
                        onClick={() => {
                            if (!user) {
                                setLoginModalOpen(true);
                                return;
                            }
                            if (data.stock === 0) {
                                alert('현재 상품의 재고가 없습니다.');
                                return;
                            }
                            navigate('/payment', {
                                state: {
                                    order_kind: 'direct_order',
                                    items: [{ ...data, quantity: amount }],
                                },
                            });
                        }}
                        disabled={user && user.user_type === 'SELLER'}
                    >
                        바로구매
                    </BuyButton>
                    <CartButton
                        type="button"
                        onClick={() => {
                            if (!user) {
                                setLoginModalOpen(true);
                                return;
                            }
                            if (data.stock === 0) {
                                alert('현재 상품의 재고가 없습니다.');
                                return;
                            }
                            checkInCart(productID)
                                ? putCartItem(cartItemInfo)
                                : setCartModalOpen(true);
                        }}
                        disabled={user && user.user_type === 'SELLER'}
                    >
                        장바구니
                    </CartButton>
                </ButtonWrapper>
            </Description>
            {loginModalOpen && (
                <ModalPortal>
                    <Modal
                        MainContent={
                            <p>
                                로그인이 필요한 서비스입니다.
                                <br />
                                로그인 하시겠습니까?
                            </p>
                        }
                        positiveOnClick={() => {
                            navigate('/login');
                        }}
                        positiveText="예"
                        negativeOnClick={() => {
                            setLoginModalOpen(false);
                        }}
                        negativeText="아니요"
                    />
                </ModalPortal>
            )}
            {cartModalOpen && (
                <ModalPortal>
                    <Modal
                        MainContent={
                            <p>
                                이미 장바구니에 있는 상품입니다.
                                <br />
                                장바구니로 이동하시겠습니까?
                            </p>
                        }
                        positiveOnClick={() => {
                            navigate('/cart');
                        }}
                        positiveText="예"
                        negativeOnClick={() => {
                            setCartModalOpen(false);
                        }}
                        negativeText="아니요"
                    />
                </ModalPortal>
            )}
            {open && (
                <ModalPortal>
                    <Modal
                        MainContent={
                            <p>
                                상품이 장바구니에 추가 되었습니다.
                                <br />
                                장바구니로 이동하시겠습니까?
                            </p>
                        }
                        positiveOnClick={() => {
                            navigate('/cart');
                        }}
                        positiveText="예"
                        negativeOnClick={() => {
                            setOpen(false);
                        }}
                        negativeText="아니요"
                    />
                </ModalPortal>
            )}
        </Wrapper>
    );
}

export default ProductDetail;
