import { atom } from 'recoil';

import { CartItem } from './types';

export const cartItemState = atom({
    key: 'cartItem',
    default: [] as CartItem[],
});