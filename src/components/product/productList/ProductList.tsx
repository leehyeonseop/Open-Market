import ProductItem from '../productItem/ProductItem';
import { Products } from './ProductList.style';
import { useProduct } from '../../../hooks/useProduct';

function ProductList(props: any) {
    const { currentPage } = props;
    const { products } = useProduct(currentPage);

    return (
        <Products>
            {products.map((product: any) => {
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
