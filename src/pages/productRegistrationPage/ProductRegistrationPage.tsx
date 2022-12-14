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
                <h2>?????? ??????</h2>
                <div>
                    <Precaution />
                    <Main>
                        <form onSubmit={onSubmit}>
                            <ImageLabel
                                htmlFor="productImage"
                                imgURL={previewImgURL}
                            >
                                ?????? ?????????
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
                                    <label htmlFor="productName">?????????</label>
                                    <input
                                        id="productName"
                                        type="text"
                                        {...register('name')}
                                    />
                                </Container>
                                <Container>
                                    <label htmlFor="price">?????????</label>
                                    <InputWrapper>
                                        <input
                                            id="price"
                                            type="text"
                                            {...register('price')}
                                        />
                                        <span>???</span>
                                    </InputWrapper>
                                </Container>
                                <Container>
                                    <fieldset>
                                        <legend>????????????</legend>
                                        <ButtonWrapper>
                                            <input
                                                id="parcel"
                                                type="radio"
                                                value="PARCEL"
                                                {...register('shippingMethod')}
                                            />
                                            <label htmlFor="parcel">
                                                ??????, ??????, ??????
                                            </label>
                                            <input
                                                id="direct"
                                                type="radio"
                                                value="DELIVERY"
                                                {...register('shippingMethod')}
                                            />
                                            <label htmlFor="direct">
                                                ????????????(????????????)
                                            </label>
                                        </ButtonWrapper>
                                    </fieldset>
                                </Container>
                                <Container>
                                    <label htmlFor="deliveryFee">
                                        ?????? ?????????
                                    </label>
                                    <InputWrapper>
                                        <input
                                            id="deliveryFee"
                                            type="text"
                                            {...register('deliveryFee')}
                                        />
                                        <span>???</span>
                                    </InputWrapper>
                                </Container>
                                <Container>
                                    <label htmlFor="stock">??????</label>
                                    <InputWrapper>
                                        <input
                                            id="stock"
                                            type="text"
                                            {...register('stock')}
                                        />
                                        <span>???</span>
                                    </InputWrapper>
                                </Container>
                            </ProductDetail>
                            <ProductDescription>
                                <label htmlFor="description">
                                    ?????? ?????? ??????
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
                                ??????
                            </CancleButton>
                            <SaveButton type="submit">??????</SaveButton>
                        </form>
                    </Main>
                </div>
                {(open || modifyModalOpen) && (
                    <ModalPortal>
                        <Modal
                            MainContent={
                                <p>
                                    ?????? {open ? '??????' : '??????'} ???
                                    ?????????????????????.
                                    <br />
                                    ????????? ????????? ????????????????
                                </p>
                            }
                            positiveOnClick={() => {
                                navigate('/sellerCenter');
                            }}
                            positiveText="???"
                            negativeOnClick={() => {
                                navigate('/');
                            }}
                            negativeText="?????????"
                        />
                    </ModalPortal>
                )}
            </Wrapper>
        </>
    );
};

export default ProductRegistrationPage;
