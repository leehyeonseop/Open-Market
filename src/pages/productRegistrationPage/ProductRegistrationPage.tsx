import { useState, SyntheticEvent, useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useProductModify } from '../../hooks/useProductModify';
import { useProductRegistration } from '../../hooks/useProductRegistration';
import { useNavigate, useLocation } from 'react-router-dom';
import SellerHeader from '../../components/header/sellerHeader/SellerHeader';
import Modal from '../../components/modal/Modal';
import Precaution from '../../components/precaution/Precaution';
import ModalPortal from '../../modalPortal';
import {
    ButtonWrapper,
    CancleButton,
    Container,
    ImageLabel,
    InputWrapper,
    Main,
    ProductDescription,
    ProductDetail,
    SaveButton,
    Wrapper,
} from './ProductRegistrationPage.style';

const ProductRegistrationPage = () => {
    const [previewImgURL, setPreviewImgURL] = useState('');
    const { productRegister, open } = useProductRegistration();
    const { modify, modifyModalOpen } = useProductModify();
    const navigate = useNavigate();

    const { register, handleSubmit, setValue } = useForm();

    const location = useLocation();
    const state = location.state;

    useEffect(() => {
        if (state.mode === 'modify') {
            const productOnSaleItem = state.productOnSaleItem;
            setPreviewImgURL(productOnSaleItem.image);
            setValue('name', productOnSaleItem.product_name);
            setValue('price', productOnSaleItem.price);
            setValue('shippingMethod', productOnSaleItem.shipping_method);
            setValue('deliveryFee', productOnSaleItem.shipping_fee);
            setValue('stock', productOnSaleItem.stock);
            setValue('description', productOnSaleItem.product_info);
        }
    }, [state]);

    const handleImage = (e: SyntheticEvent) => {
        if (e.target instanceof HTMLInputElement && e.target.files !== null) {
            setValue('image', e.target.files[0]);
            setPreviewImgURL(URL.createObjectURL(e.target.files[0]));
            URL.revokeObjectURL(previewImgURL);
        }
    };

    const onSubmit = handleSubmit(async (data: FieldValues) => {
        if (state.mode === 'register') productRegister(data);
        else if (state.mode === 'modify') {
            const productInfo = {
                data: data,
                product_id: state.productOnSaleItem.product_id,
            };
            modify(productInfo);
        }
    });

    return (
        <>
            <SellerHeader />
            <Wrapper>
                <h2>상품 등록</h2>
                <div>
                    <Precaution />
                    <Main>
                        <form onSubmit={onSubmit}>
                            <ImageLabel
                                htmlFor="productImage"
                                imgURL={previewImgURL}
                            >
                                상품 이미지
                            </ImageLabel>
                            <input
                                id="productImage"
                                type="file"
                                {...(register('image'),
                                {
                                    onChange: handleImage,
                                })}
                            />
                            <ProductDetail>
                                <Container>
                                    <label htmlFor="productName">상품명</label>
                                    <input
                                        id="productName"
                                        type="text"
                                        {...register('name')}
                                    />
                                </Container>
                                <Container>
                                    <label htmlFor="price">판매가</label>
                                    <InputWrapper>
                                        <input
                                            id="price"
                                            type="text"
                                            {...register('price')}
                                        />
                                        <span>원</span>
                                    </InputWrapper>
                                </Container>
                                <Container>
                                    <fieldset>
                                        <legend>배송방법</legend>
                                        <ButtonWrapper>
                                            <input
                                                id="parcel"
                                                type="radio"
                                                value="PARCEL"
                                                {...register('shippingMethod')}
                                            />
                                            <label htmlFor="parcel">
                                                택배, 소포, 등기
                                            </label>
                                            <input
                                                id="direct"
                                                type="radio"
                                                value="DELIVERY"
                                                {...register('shippingMethod')}
                                            />
                                            <label htmlFor="direct">
                                                직접배송(화물배달)
                                            </label>
                                        </ButtonWrapper>
                                    </fieldset>
                                </Container>
                                <Container>
                                    <label htmlFor="deliveryFee">
                                        기본 배송비
                                    </label>
                                    <InputWrapper>
                                        <input
                                            id="deliveryFee"
                                            type="text"
                                            {...register('deliveryFee')}
                                        />
                                        <span>원</span>
                                    </InputWrapper>
                                </Container>
                                <Container>
                                    <label htmlFor="stock">재고</label>
                                    <InputWrapper>
                                        <input
                                            id="stock"
                                            type="text"
                                            {...register('stock')}
                                        />
                                        <span>개</span>
                                    </InputWrapper>
                                </Container>
                            </ProductDetail>
                            <ProductDescription>
                                <label htmlFor="description">
                                    상품 상세 정보
                                </label>
                                <textarea
                                    id="description"
                                    cols={30}
                                    rows={10}
                                    {...register('description')}
                                />
                            </ProductDescription>
                            <CancleButton
                                type="button"
                                onClick={() => navigate('/sellerCenter')}
                            >
                                취소
                            </CancleButton>
                            <SaveButton type="submit">저장</SaveButton>
                        </form>
                    </Main>
                </div>
                {(open || modifyModalOpen) && (
                    <ModalPortal>
                        <Modal
                            MainContent={
                                <p>
                                    상품 {open ? '등록' : '수정'} 이
                                    완료되었습니다.
                                    <br />
                                    판매자 센터로 이동할까요?
                                </p>
                            }
                            positiveOnClick={() => {
                                navigate('/sellerCenter');
                            }}
                            positiveText="예"
                            negativeOnClick={() => {
                                navigate('/');
                            }}
                            negativeText="아니요"
                        />
                    </ModalPortal>
                )}
            </Wrapper>
        </>
    );
};

export default ProductRegistrationPage;
