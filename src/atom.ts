import { atom } from 'recoil';

import { ICartItemDetail } from './types';

export const cartItemState = atom({
    key: 'cartItem',
    default: [] as ICartItemDetail[],
});

export const checkedCartItemState = atom({
    key: 'checkedCartItem',
    default: [] as ICartItemDetail[],
});
