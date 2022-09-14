import React from 'react';
import ProductItem from '../productItem/ProductItem';
import { Products } from './ProductList.style';

function ProductList() {
    return (
        <Products>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </Products>
    );
}

export default ProductList;
