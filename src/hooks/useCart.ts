import { useQuery, useQueryClient } from 'react-query';
import { useRecoilState } from 'recoil';
import { cartItemState } from '../atom';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';
import { getProductDetail } from './useProductDetail';

export const useCart = (isChecked?: boolean) => {
    const queryClient = useQueryClient();
    const user = getUser();
    const [cartItem, setCartItem] = useRecoilState(cartItemState);

    const getCartItems = async () => {
        if (!user) return null;
        const { data } = await axiosInstance.get('cart/', {
            headers: getJWTHeader(user),
        });

        return data.results;
    };

    const { data: cartItems = [] } = useQuery(
        ['cartItem', user.id],
        getCartItems,
        {
            onSuccess(data) {
                // data.forEach(async (element: any) => {
                //     const cartItemDetail = await getProductDetail(
                //         element.product_id,
                //     );
                //     cartItemDetail.quantity = element.quantity;

                //     // setCartItem을 바깥으로 (렌더링 반복문때문에 너무 많이됨)

                //     setCartItem((prev) => {
                //         const newArr = [...prev, cartItemDetail];
                //         const filteredArr = newArr.filter(
                //             (element, index, array) =>
                //                 index ===
                //                 array.findIndex(
                //                     (t) => t.product_id === element.product_id,
                //                 ),
                //         );

                //         return filteredArr;
                //     });
                // });

                const cartItemDetailArray = [];

                (async function() {

                })()

            },
        },
    );

    return { cartItems };
};
