import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';

const user = getUser();

const productDelete = async (product_id: string) => {
    if (!user) return;
    await axiosInstance.delete(`products/${product_id}/`, {
        headers: getJWTHeader(user),
    });
};

export const useProductDelete = () => {
    const queryClient = useQueryClient();
    const { mutate } = useMutation(
        (product_id: string) => productDelete(product_id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['sellerProduct']);
            },
        },
    );

    return mutate;
};
