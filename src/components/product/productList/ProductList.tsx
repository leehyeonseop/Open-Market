import React from 'react';
import ProductItem from '../productItem/ProductItem';
import { Products } from './ProductList.style';
import { axiosInstance } from '../../../axiosInstance';
import { useQuery } from 'react-query';

function ProductList() {

    const getProducts = async () => {
        const {data} = await axiosInstance.get('products')
        console.log(data)

        console.log(data.results)

        return data.results
    }

    // interface Product {
    //     image: string,
    //     price: number,
    //     product_id: number,
    //     product_info: string,
    //     product_name: string,
    //     seller: number,
    //     seller_store: string,
    //     shipping_fee: number,
    //     shipping_method: string,
    //     stock: number
    // }

    const fallBack : any [] = []

    const {data : products = fallBack, isLoading, isError, error} = useQuery(['product'], getProducts)

    if(isLoading) return <h1>로딩중</h1>

    return (
        <Products>
            {products.map((product : any) => {
                return <ProductItem 
                            imgURL={product.image} 
                            store={product.seller_store} 
                            productName={product.product_name} 
                            price={(product.price).toLocaleString('ko-KR')} 
                        />
            })}
        </Products>
    );
}

export default ProductList;
