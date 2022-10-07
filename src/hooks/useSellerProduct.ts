import { getUser } from './../localStorage/index';
import { getJWTHeader } from './../axiosInstance/index';
import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

const initialUrl = 'https://openmarket.weniv.co.kr/seller/';

export const useSellerProduct = () => {
    const user = getUser();
    const getSellerProduct = async (url: string) => {
        if (!user || user.user_type === 'BUYER') {
            alert('구매자 계정으로 로그인 해주세요!');
            return;
        }
        const { data } = await axios.get(url, {
            headers: getJWTHeader(user),
        });

        return data;
    };

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetching,
        isError,
        error,
    } = useInfiniteQuery(
        'sellerProduct',
        ({ pageParam = initialUrl }) => getSellerProduct(pageParam),
        {
            getNextPageParam: (lastPage) => lastPage.next || undefined,
        },
    );

    return {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetching,
        isError,
        error,
    };
};
