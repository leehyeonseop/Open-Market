import { IProductDetail } from '../../../types';
import ProductItem from '../productItem/ProductItem';
import { Products } from './ProductList.style';

interface IProductListProps {
    products: IProductDetail[];
}

function ProductList(props: IProductListProps) {
    const { products } = props;

    return (
        <Products>
            {products.map((product) => {
                return (
                    <ProductItem
                        key={product.product_id}
                        productID={product.product_id}
                        imgURL={product.image}
                        store={product.store_name}
                        productName={product.product_name}
                        price={product.price.toLocaleString('ko-KR')}
                    />
                );
            })}
        </Products>
    );
}

export default ProductList;
