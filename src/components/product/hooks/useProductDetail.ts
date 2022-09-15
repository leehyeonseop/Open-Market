import { useQuery } from 'react-query';
import { axiosInstance } from '../../../axiosInstance';

const getProductDetail = async (productID: string) => {
    const { data } = await axiosInstance.get(`products/${productID}`);
    return data;
};

export const useProductDetail = (productID: string) => {
    const fallBack = {};
    const { data = fallBack } = useQuery(['product', productID], () =>
        getProductDetail(productID),
    );
    return { data };
};
