import { getUser } from './../localStorage/index';
import { getJWTHeader } from './../axiosInstance/index';
import { useQuery } from 'react-query';
import { axiosInstance } from '../axiosInstance';

export const useSellerProduct = () => {
    const user = getUser();

    const getSellerProduct = async () => {
        if (user.user_type === 'BUYER') return;
        const { data } = await axiosInstance.get('seller/', {
            headers: getJWTHeader(user),
        });

        return data.results;
    };

    const { data: productOnSaleItems = [] } = useQuery(
        ['sellerProduct', user.id],
        getSellerProduct,
    );

    return { productOnSaleItems };
};
