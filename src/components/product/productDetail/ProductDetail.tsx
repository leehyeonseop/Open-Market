import { useProductDetail } from '../../../hooks/useProductDetail';
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
    SuccessMessage,
    TotalAmount,
    TotalNumber,
    TotalPrice,
    TotalWon,
    TotalWrapper,
    Won,
    Wrapper,
} from './ProductDetail.style';

import { useState } from 'react';
import { ICartItem } from '../../../types';
import { usePutCart } from '../../../hooks/usePutCart';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../../localStorage';
import Modal from '../../modal/Modal';
import ModalPortal from '../../../modalPortal';
import { Alert, Snackbar } from '@mui/material';
import Success from '../../success/Success';

function ProductDetail(props: any) {
    const { productID } = props;
    const { data } = useProductDetail(productID);

    const [amount, setAmount] = useState(1);
    const [loginModalOpen, setLoginModalOpen] = useState(false);
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const { putCartItem, checkInCart, open, setOpen } = usePutCart();
    const user = getUser();

    const navigate = useNavigate();

    const cartItemInfo: ICartItem = {
        quantity: amount,
        product_id: productID,
        check: checkInCart(productID),
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
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
                        onClick={() =>
                            navigate('/payment', {
                                state: {
                                    order_kind: 'direct_order',
                                    items: [{ ...data, quantity: amount }],
                                },
                            })
                        }
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
                            checkInCart(productID)
                                ? putCartItem(cartItemInfo)
                                : setCartModalOpen(true);
                        }}
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
            <Success
                open={open}
                setOpen={setOpen}
                message="장바구니에 메뉴를 추가했습니다."
            />
        </Wrapper>
    );
}

export default ProductDetail;
