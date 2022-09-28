export interface User {
    id: number;
    token: string;
    user_type: string;
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
