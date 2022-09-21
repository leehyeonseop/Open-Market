import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { cartItemState } from '../atom';
import { axiosInstance } from '../axiosInstance';

const getProductDetail = async (productID: string) => {
    const { data } = await axiosInstance.get(`products/${productID}`);
    return data;
};

export const useProductDetail = (productID: string, quantity?: number) => {
    const [cartItem, setCartItem] = useRecoilState(cartItemState);

    const fallBack = {};
    const { data = fallBack } = useQuery(
        ['product', productID],
        () => getProductDetail(productID),
        {
            onSuccess(data) {
                if(quantity === undefined) return
                data.quantity = quantity;
                const newArr = [...cartItem, data];

                const filteredArr = newArr.filter(
                    (element, index, array) =>
                        index ===
                        array.findIndex(
                            (t) => t.product_id === element.product_id,
                        ),
                );

                setCartItem(filteredArr);
            },
        },
    );
    return { data };
};
