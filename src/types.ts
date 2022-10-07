export interface User {
    id: number;
    token: string;
    user_type: string;
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

export interface ICartItem {
    product_id: string;
    quantity: number;
    check: boolean;
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
