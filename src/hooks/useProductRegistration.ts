import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';

const user = getUser();

const createFormData = (data: FieldValues) => {
    let formData = new FormData();
    formData.append('image', data.image);
    formData.append('product_name', data.name);
    formData.append('price', data.price);
    formData.append('shipping_method', data.shippingMethod);
    formData.append('shipping_fee', data.deliveryFee);
    formData.append('stock', data.stock);
    formData.append('product_info', data.description);

    return formData;
};

const productRegistration = async (data: FieldValues) => {
    const formData = createFormData(data);
    await axiosInstance.post('products/', formData, {
        headers: getJWTHeader(user),
    });
};

export const useProductRegistration = () => {
    const { mutate } = useMutation((data: FieldValues) =>
        productRegistration(data),
    );
    return mutate;
};
