import React from 'react';
import ProductItem from '../productItem/ProductItem';
import { Products } from './ProductList.style';
import { axiosInstance } from '../../../axiosInstance';
import { useQuery } from 'react-query';

function ProductList() {

    const getProducts = async () => {
        const {data} = await axiosInstance.get('products')
        console.log(data)

        return data.results
    }

    const {data : products, isLoading, isError, error} = useQuery(['product'], getProducts)

    if(isLoading) return <h1>로딩중</h1>

    if(isError) return (
        <>
        <h1>에러발생</h1>
        </>
        )

    return (
        <Products>
            {products.map((product : any) => {
                return <ProductItem 
                            imgURL={product.image} 
                            store={product.seller_store} 
                            productName={product.product_name} 
                            price={product.price} 
                        />
            })}
        </Products>
    );
}

export default ProductList;
