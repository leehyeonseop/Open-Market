import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';

export const useProduct = (currentPage: number) => {
    const [maxPage, setMaxPage] = useState(0);
    const queryClient = useQueryClient();

    const getProducts = async (pageNum: number) => {
        const { data } = await axiosInstance.get(`products/?page=${pageNum}`);
        setMaxPage(Math.ceil(data.count / 15));
        return data.results;
    };

    // 다음페이지 상품목록 미리 불러오기
    useEffect(() => {
        if (currentPage < maxPage) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery(['products', nextPage], () =>
                getProducts(nextPage),
            );
        }
    }, [queryClient, currentPage, maxPage]);

    interface Product {
        image: string;
        price: number;
        product_id: number;
        product_info: string;
        product_name: string;
        seller: number;
        seller_store: string;
        shipping_fee: number;
        shipping_method: string;
        stock: number;
    }

    const fallBack: Product[] = [];

    const {
        data: products = fallBack,
        isLoading,
        isError,
        error,
    } = useQuery(['products', currentPage], () => getProducts(currentPage), {
        keepPreviousData: true,
    });

    return { products };
};
