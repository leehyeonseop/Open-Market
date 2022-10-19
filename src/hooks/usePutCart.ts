import { User, ICartItem, ICartItemData } from './../types';
import { getJWTHeader } from './../axiosInstance/index';
import { axiosInstance } from '../axiosInstance';
import { getUser } from '../localStorage';
import { useMutation, useQueryClient } from 'react-query';
import { useCart } from './useCart';

const putCart = async (
    user: User,
    product_id: string,
    quantity: number,
    check: boolean,
) => {
    if (!user) return;
    const cartData = {
        product_id: product_id,
        quantity: quantity,
        check: check,
    };
    await axiosInstance.post('cart/', cartData, {
        headers: getJWTHeader(user),
    });
};

export const usePutCart = () => {
    const user = getUser();
    const queryClient = useQueryClient();

    const { cartItems } = useCart();

    const checkInCart = (product_id: string) => {
        if (!user || !cartItems) return false;
        const inCartItem = cartItems.find(
            (item: ICartItemData) => item.product_id === parseInt(product_id),
        );

        return inCartItem === undefined ? true : false;
    };

    const { mutate: putCartItem } = useMutation(
        (cartItem: ICartItem) =>
            putCart(
                user,
                cartItem.product_id,
                cartItem.quantity,
                cartItem.check,
            ),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['cartItem']);
            },
        },
    );

    return { putCartItem, checkInCart };
};
