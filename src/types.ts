import { Dispatch, SetStateAction } from 'react';
import {
    FieldErrors,
    FieldErrorsImpl,
    FieldValues,
    UseFormGetValues,
    UseFormRegister,
    UseFormSetError,
} from 'react-hook-form';
import { UseQueryResult } from 'react-query';

export interface User {
    id: number;
    token: string;
    user_type: string;
}

export interface IButtonProps {
    type?: 'button' | 'submit' | 'reset';
    text: string;
    padding?: number;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export interface IProduct {
    image: string;
    price: number;
    product_id: number;
    product_info: string;
    product_name: string;
    seller: number;
    seller_store: string;
    shipping_fee: number;
    shipping_method: string;
    stock: number;
}

export interface IProductDetail extends IProduct {
    created_at: string;
    store_name: string;
    updated_at: string;
}

export interface ICartItem {
    product_id: string;
    quantity: number;
    check: boolean;
}

export interface ICartItemProps {
    product_id: number;
    quantity: number;
    cart_item_id: number;
    is_active: boolean;
    details?: ICartItemDetail;
    cartItems: ICartItemData[];
}

export interface ICartItemData {
    cart_item_id: number;
    is_active: boolean;
    my_cart: number;
    product_id: number;
    quantity: number;
}

export interface ICartItemDetail {
    product_id: number;
    product_name: string;
    seller: number;
    store_name: string;
    image: string;
    price: number;
    shipping_method: string;
    shipping_fee: number;
    stock: number;
    product_info: string;
    quantity: number;
}

export interface ICartListProps {
    cartItems: ICartItemData[];
    checkboxRefs: React.RefObject<HTMLInputElement>[];
    cartItemsDetailList: UseQueryResult<ICartItemDetail, unknown>[];
}

export interface IModifyData {
    user: User;
    cart_item_id: number;
    product_id: number;
    is_active: boolean;
    amount: number;
}

export interface ISaleItem {
    product_id: number;
    created_at: string;
    updated_at: string;
    product_name: string;
    image: string;
    price: number;
    shipping_method: string;
    shipping_fee: number;
    stock: number;
    product_info: string;
    seller: number;
    store_name: string;
}

export interface IOrderItemDetail extends ISaleItem {
    quantity: number;
}

export interface IBaseOrderData {
    total_price: number;
    order_kind: string;
    receiver: string;
    receiver_phone_number: string;
    address: string;
    address_message: string;
    payment_method: string;
}

export interface IOrderData extends IBaseOrderData {
    product_id?: number;
    quantity?: number;
}

export interface IOrder {
    data: FieldValues;
    totalPrice: number;
    orderKind: string;
    items: IOrderItemDetail[];
}

export interface IState {
    order_kind: string;
    items: IOrderItemDetail[];
    cartItems: ICartItemData[];
}

export interface IAmountControlProps {
    className?: string;
    stock: number;
    amount: number;
    setAmount: Dispatch<SetStateAction<number>>;
    onClick?: () => void;
}

export interface IProductOnSaleItem {
    productOnSaleItem: ISaleItem;
}

export interface IDropDown {
    dropDown: boolean;
}

export interface IErrorProps {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    message: string;
}

export interface ISellerProps {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrorsImpl<{
        [x: string]: any;
    }>;
    setError: UseFormSetError<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
    registrationNumberVerify: (
        setError: UseFormSetError<FieldValues>,
        getValues: UseFormGetValues<FieldValues>,
    ) => Promise<void>;
    setRegistrationNumberChecked: React.Dispatch<React.SetStateAction<boolean>>;
    registrationNumberChecked: boolean;
    registrationSuccessMessage: string;
}

export interface IDeliveryInfoProps {
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

export interface IFinalPaymentProps {
    className?: string;
    totalProductPrice: number;
    totalShippingFee: number;
    totalPrice: number;
}

export interface IPaymentMethodProps {
    className?: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

export interface IProductItemProps {
    productID: number;
    imgURL: string;
    store: string;
    productName: string;
    price: string;
}

export interface ISuccessProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
}

export interface IModalProps {
    positiveText: string;
    MainContent: any;
    negativeText: string;
    negativeOnClick: () => void;
    positiveOnClick: () => void;
}
