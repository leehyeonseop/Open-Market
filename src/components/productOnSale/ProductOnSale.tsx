import { ISaleItem } from '../../types';
import ProductOnSaleItem from '../productOnSaleItem/ProductOnSaleItem';
import { ProductOnSaleHeader, Section } from './ProductOnSale.style';

interface IProductOnSale {
    productOnSaleItems: ISaleItem[];
}

const ProductOnSale = (props: IProductOnSale) => {
    const { productOnSaleItems } = props;

    return (
        <Section>
            <ProductOnSaleHeader>
                <span>상품정보</span>
                <span>판매가격</span>
                <span>수정</span>
                <span>삭제</span>
            </ProductOnSaleHeader>
            <ul>
                {productOnSaleItems.map((productOnSaleItem) => (
                    <ProductOnSaleItem productOnSaleItem={productOnSaleItem} />
                ))}
            </ul>
        </Section>
    );
};

export default ProductOnSale;
