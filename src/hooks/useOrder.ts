import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useMutation } from 'react-query';
import { axiosInstance, getJWTHeader } from '../axiosInstance';
import { getUser } from '../localStorage';
import {
    ICartItemData,
    IModifyData,
    IOrder,
    IOrderData,
    IOrderItemDetail,
} from '../types';
import { useCartModify } from './useCartModify';

export const useOrder = () => {
    const user = getUser();
    const [open, setOpen] = useState(false);
    const modify = useCartModify();

    const orderItemCheck = (
        items: IOrderItemDetail[],
        cartItems: ICartItemData[],
    ) => {
        // 1. 선택된 아이템들의 아이디를 뽑아냅니다.
        const selectedProductIDList = items.map(
            (item: IOrderItemDetail) => item.product_id,
        );

        // 2. 카트아이템에서 선택된 아이템들을 뽑아냅니다.
        const selectedItemList = cartItems.reduce(
            (res: ICartItemData[], ref: ICartItemData) => {
                if (selectedProductIDList.includes(ref.product_id)) {
                    res.push(ref);
                }
                return res;
            },
            [],
        );

        // 3 선택되지 아이템들은 is_active를 false로 바꿔줘야하기 때문에 또한 뽑아냅니다.
        const unSelectedItemList = cartItems.reduce(
            (res: ICartItemData[], ref: ICartItemData) => {
                if (!selectedProductIDList.includes(ref.product_id)) {
                    res.push(ref);
                }
                return res;
            },
            [],
        );

        // 4. 선택된 아이템이 is_active가 false라면 true로 변경
        const selectedPromiseList = selectedItemList
            .filter((item: ICartItemData) => !item.is_active)
            .map((item: ICartItemData) => {
                const modifyData: IModifyData = {
                    user: user,
                    cart_item_id: item.cart_item_id,
                    product_id: item.product_id,
                    is_active: !item.is_active,
                    amount: item.quantity,
                };
                return modify(modifyData);
            });

        // 5. 선택되지 않은 아이템들은 is_active가 true라면 false로 변경
        const unselectedPromiseList = unSelectedItemList
            .filter((item: ICartItemData) => item.is_active)
            .map((item: ICartItemData) => {
                const modifyData: IModifyData = {
                    user: user,
                    cart_item_id: item.cart_item_id,
                    product_id: item.product_id,
                    is_active: !item.is_active,
                    amount: item.quantity,
                };
                return modify(modifyData);
            });

        const promiseList = selectedPromiseList.concat(unselectedPromiseList);

        return promiseList;
    };

    const order = async (
        data: FieldValues,
        totalPrice: number,
        orderKind: string,
        items: IOrderItemDetail[],
    ) => {
        const phone_number =
            data.startPhoneNum + data.centerPhoneNum + data.endPhoneNum;

        const reqData: IOrderData = {
            total_price: totalPrice,
            order_kind: orderKind,
            receiver: data.receiver,
            receiver_phone_number: phone_number,
            address: data.address,
            address_message: data.message,
            payment_method: data.paymentMethod,
            product_id: undefined,
            quantity: undefined,
        };

        if (orderKind === 'cart_one_order' || 'direct_order') {
            reqData.product_id = items[0].product_id;
            reqData.quantity = items[0].quantity;
        }

        await axiosInstance.post('order/', reqData, {
            headers: getJWTHeader(user),
        });
    };

    const { mutate: orderItem } = useMutation(
        (orderData: IOrder) =>
            order(
                orderData.data,
                orderData.totalPrice,
                orderData.orderKind,
                orderData.items,
            ),
        {
            onSuccess: () => {
                setOpen(true);
            },
        },
    );

    return { orderItemCheck, orderItem, open, setOpen };
};
