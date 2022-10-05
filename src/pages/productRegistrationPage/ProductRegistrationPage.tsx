import { useState, SyntheticEvent } from 'react';
import SellerHeader from '../../components/header/sellerHeader/SellerHeader';
import {
    Aside,
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
    const [imgURL, setImgURL] = useState('');

    const handleImage = (e: SyntheticEvent) => {
        if (e.target instanceof HTMLInputElement && e.target.files !== null) {
            setImgURL(URL.createObjectURL(e.target.files[0]));
            URL.revokeObjectURL(imgURL);
        }
    };

    return (
        <>
            <SellerHeader />
            <Wrapper>
                <h2>상품 등록</h2>
                <div>
                    <Aside>
                        <span>*상품 등록 주의사항</span>
                        <p>
                            - 너무 귀여운 사진은 심장이 아파올 수 있습니다.
                            <br />
                            <br />- 유소년에게서 천자만홍이 피고 이상이 온갖
                            들어 약동하다. 이상의 가지에 사랑의 있는가? 주며,
                            끓는 힘차게 얼음이 얼음 가치를 황금시대의 있음으로써
                            사라지지 것이다. 이 뜨거운지라, 이상의 속에서 이것은
                            피가 보배를 황금시대의 싹이 사막이다. <br />
                            <br />- 자신과 우는 옷을 지혜는 아니다. 더운지라
                            설레는 기쁘며, 위하여서, 평화스러운 광야에서
                            그리하였는가? 소담스러운 위하여 인도하겠다는 어디
                            무엇을 이상을 같지 따뜻한 청춘 칼이다. <br />
                            <br />- 가치를 그들을 예수는 찬미를 가슴이 과실이
                            이것이다. 희망의 것이다.보라, 풍부하게 이것은
                            황금시대를 얼마나 인간에 돋고, 이것이다.
                        </p>
                    </Aside>
                    <Main>
                        <form>
                            <ImageLabel htmlFor="productImage" imgURL={imgURL}>
                                상품 이미지
                            </ImageLabel>
                            <input
                                id="productImage"
                                type="file"
                                onChange={handleImage}
                            />
                            <ProductDetail>
                                <Container>
                                    <label htmlFor="productName">상품명</label>
                                    <input id="productName" type="text" />
                                </Container>
                                <Container>
                                    <label htmlFor="price">판매가</label>
                                    <InputWrapper>
                                        <input id="price" type="text" />
                                        <span>원</span>
                                    </InputWrapper>
                                </Container>
                                <Container>
                                    <label htmlFor="delivery">배송방법</label>
                                    <ButtonWrapper>
                                        <button type="button">
                                            택배, 소포, 등기
                                        </button>
                                        <button type="button">
                                            직접배송(화물배달)
                                        </button>
                                    </ButtonWrapper>
                                </Container>
                                <Container>
                                    <label htmlFor="deliveryFee">
                                        기본 배송비
                                    </label>
                                    <InputWrapper>
                                        <input id="deliveryFee" type="text" />
                                        <span>원</span>
                                    </InputWrapper>
                                </Container>
                                <Container>
                                    <label htmlFor="stock">재고</label>
                                    <InputWrapper>
                                        <input id="stock" type="text" />
                                        <span>개</span>
                                    </InputWrapper>
                                </Container>
                            </ProductDetail>
                            <ProductDescription>
                                <label htmlFor="">상품 상세 정보</label>
                                <textarea
                                    name=""
                                    id=""
                                    cols={30}
                                    rows={10}
                                ></textarea>
                            </ProductDescription>
                            <CancleButton type="button">취소</CancleButton>
                            <SaveButton type="button">저장</SaveButton>
                        </form>
                    </Main>
                </div>
            </Wrapper>
        </>
    );
};

export default ProductRegistrationPage;
