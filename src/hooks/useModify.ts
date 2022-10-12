import { useMutation, useQueryClient } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { IModifyData } from '../types';

const cartItemModify = async (modifyData: IModifyData) => {
    if (!modifyData.user) return;
    const reqData = {
        product_id: modifyData.product_id,
        quantity: modifyData.amount,
        is_active: modifyData.is_active,
    };

    await axiosInstance.put(`cart/${modifyData.cart_item_id}/`, reqData, {
        headers: getJWTHeader(modifyData.user),
    });
};

export const useModify = () => {
    const queryClient = useQueryClient();

    const { mutateAsync } = useMutation(cartItemModify, {
        onSuccess: () => {
            console.log('수정 성공!');
            queryClient.invalidateQueries(['cartItem']);
        },
    });

    return mutateAsync;
};
