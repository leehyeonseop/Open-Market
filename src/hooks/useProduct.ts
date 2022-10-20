import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { axiosInstance } from '../axiosInstance';
import { IProduct } from '../types';

export const useProduct = () => {
    const [currentPage, setCurrentPage] = useState(1);
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

    const fallBack: IProduct[] = [];

    const { data: products = fallBack } = useQuery(
        ['products', currentPage],
        () => getProducts(currentPage),
        {
            keepPreviousData: true,
        },
    );

    return { products, maxPage, currentPage, setCurrentPage };
};
