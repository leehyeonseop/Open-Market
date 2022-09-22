import { atom } from 'recoil';

import { CartItem } from './types';

export const cartItemState = atom({
    key: 'cartItem',
    default: [] as CartItem[],
});

export const checkedCartItemState = atom({
    key: 'checkedCartItem',
    default: [] as CartItem[],
});
