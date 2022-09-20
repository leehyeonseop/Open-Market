import { useQuery } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';

export const useCart = () => {
    const user = getUser();

    const getCartItems = async () => {
        if (!user) return null;
        const { data } = await axiosInstance.get('cart/', {
            headers: getJWTHeader(user),
        });

        return data.results;
    };

    const cartItemDetail = async (cart_item_id: number) => {
        if (!user || user.user_type !== 'BUYER') return null;
        const { data: itemDetail } = await axiosInstance.get(
            `cart/${cart_item_id}/`,
            {
                headers: getJWTHeader(user),
            },
        );

        return itemDetail;
    };

    const { data: cartItems = [] } = useQuery(
        ['cartItem', user.id],
        getCartItems,
    );

    // const {data} = useQuery(['itemDetail'], () => cartItemDetail())

    return { cartItems };
};
