import { ProductItem } from './ProductOnSale.style';

const ProductOnSale = () => {
    return (
        <>
            <ul>
                <ProductItem>
                    <figure>
                        <img src="" alt="" />
                    </figure>
                    <div>
                        <span>딥러닝 개발자 무릎 담요</span>
                        <span>재고 : 370개</span>
                    </div>
                    <strong>17,500원</strong>
                    <button type="button">수정</button>
                    <button type="button">삭제</button>
                </ProductItem>
            </ul>
        </>
    );
};

export default ProductOnSale;
