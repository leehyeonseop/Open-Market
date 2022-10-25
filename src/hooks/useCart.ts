import { useQuery } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';

export const useCart = () => {
    const user = getUser();

    const getCartItems = async () => {
        if (!user || user.user_type === 'SELLER') return null;
        const { data } = await axiosInstance.get('cart/', {
            headers: getJWTHeader(user),
        });

        return data.results;
    };

    const { data: cartItems = [] } = useQuery(['cartItem'], getCartItems);

    return { cartItems };
};
