import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';

const user = getUser();

const productRegistration = async (data: FieldValues) => {
    const reqData = {
        product_name: data.name,
        image: data.image,
        price: data.price,
        shipping_method: data.shippingMethod, // PARCEL 또는 DELIVERY 선택
        shipping_fee: data.deliveryFee,
        stock: data.stock,
        product_info: data.description,
    };
    await axiosInstance.post('products/', reqData, {
        headers: {
            ...getJWTHeader(user),
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const useProductRegistration = () => {
    const [open, setOpen] = useState(false);
    const { mutate: productRegister } = useMutation(
        (data: FieldValues) => productRegistration(data),
        {
            onSuccess: () => setOpen(true),
        },
    );
    return { productRegister, open, setOpen };
};
