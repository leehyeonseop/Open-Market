import { ISaleItem } from '../../types';
import { Wrapper } from './ProductOnSaleItem.style';

interface IProductOnSaleItem {
    productOnSaleItem: ISaleItem;
}

const ProductOnSaleItem = (props: IProductOnSaleItem) => {
    const { productOnSaleItem } = props;

    return (
        <Wrapper>
            <div>
                <figure
                    style={{
                        backgroundImage: `url(${productOnSaleItem.image})`,
                    }}
                >
                    <img src={productOnSaleItem.image} alt="" />
                </figure>
                <div>
                    <span>{productOnSaleItem.product_name}</span>
                    <span>재고 : {productOnSaleItem.stock}개</span>
                </div>
            </div>
            <strong>{productOnSaleItem.price.toLocaleString('ko-KR')}원</strong>
            <button type="button">수정</button>
            <button type="button">삭제</button>
        </Wrapper>
    );
};

export default ProductOnSaleItem;
