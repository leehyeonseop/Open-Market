import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';
export const useCartDelete = () => {
    const queryClient = useQueryClient();
    const user = getUser();

    const deleteCartItem = async (cart_item_id: number) => {
        if (!user) return;
        await axiosInstance.delete(`cart/${cart_item_id}/`, {
            headers: getJWTHeader(user),
        });
    };

    const { mutate } = useMutation(deleteCartItem, {
        onSuccess: () => {
            queryClient.invalidateQueries(['cartItem']);
        },
    });

    return mutate;
};
