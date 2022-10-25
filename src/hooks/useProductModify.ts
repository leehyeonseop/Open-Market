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

    console.log('reqData : ', reqData);

    await axiosInstance.put(`products/${id}/`, reqData, {
        headers: {
            ...getJWTHeader(user),
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const useProductModify = () => {
    const { mutate } = useMutation((modifyInfo: any) =>
        productModify(modifyInfo.data, modifyInfo.product_id),
    );

    return mutate;
};
