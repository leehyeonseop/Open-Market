import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';

const user = getUser();

const productModify = async (data: FieldValues, id: string) => {
    const reqData = {
        product_name: data.name,
        price: data.price,
        shipping_method: data.shippingMethod,
        shipping_fee: data.deliveryFee,
        stock: data.stock,
        product_info: data.description,
        image: data.image,
    };

    await axiosInstance.patch(`products/${id}/`, reqData, {
        headers: {
            ...getJWTHeader(user),
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const useProductModify = () => {
    const [modifyModalOpen, setModifyModalOpen] = useState(false);
    const { mutate: modify } = useMutation(
        (modifyInfo: any) =>
            productModify(modifyInfo.data, modifyInfo.product_id),
        {
            onSuccess: () => setModifyModalOpen(true),
        },
    );

    return { modify, modifyModalOpen, setModifyModalOpen };
};
