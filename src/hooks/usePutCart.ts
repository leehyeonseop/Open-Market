import { User, ICartItem } from './../types';
import { getJWTHeader } from './../axiosInstance/index';
import { axiosInstance } from '../axiosInstance';
import { getUser } from '../localStorage';
import { useMutation } from 'react-query';
import { useCart } from './useCart';

const putCart = async (
    user: User,
    product_id: number,
    quantity: number,
    check: boolean,
) => {
    if (!user) return;
    const cartData = {
        product_id: product_id,
        quantity: quantity,
        check: check,
    };
    const a = await axiosInstance.post('cart/', cartData, {
        headers: getJWTHeader(user),
    });
    console.log('담아졋냐 ? : ', a);
};

export const usePutCart = () => {
    const user = getUser();
    const cartItems = useCart();
    console.log('cartItems : ', cartItems.cartItems);
    const { mutate } = useMutation(
        (cartItem: ICartItem) => {
            // const check = cartItems.find((item) => item.)
            return putCart(
                user,
                cartItem.product_id,
                cartItem.quantity,
                cartItem.check,
            );
        },
        {
            onSuccess: () => {
                console.log('성공~');
            },
        },
    );

    return mutate;
};
