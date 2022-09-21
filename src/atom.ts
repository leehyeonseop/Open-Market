import axios from 'axios';
import { atom, selector, selectorFamily } from 'recoil';
import { axiosInstance } from './axiosInstance';
import { CartItem, CartItem2 } from './types';

export const cartItemState = atom({
    key: 'cartItem',
    default: [] as CartItem[],
});

export const cartItemState2 = atom({
    key: 'cartItem2',
    default: [] as CartItem2[],
});

export const cartItemsState = selectorFamily({
    key: 'cartItems',
    get:
        (productID: string) =>
        async ({ get }) => {
            if (!productID) return '';

            const { data } = await axiosInstance.get(`products/${productID}`);

            return data;
        },

    set:
        () =>
        ({ set }, newValue) => {
            set(cartItemState2, (prevState) => [...prevState, newValue]);
        },
});

export const myAtom = atom({
    key: 'myAtom',
    default: 30,
});

export const myAtom2 = atom({
    key: 'myAtom2',
    default: 0,
});

export const mySelector = selector({
    key: 'MySelector',
    get: ({ get }) => get(myAtom) * 100,
    set: ({ set }, newValue) => {
        set(myAtom2, (newValue as number) + 555);
    },
});
