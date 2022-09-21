export interface User {
    id: number;
    token: string;
    user_type: string;
}

export interface Item {
    my_cart: number;
    cart_item_id: number;
    product_id: number;
    quantity: number;
    is_active: boolean;
}

export interface CartItem {
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
export interface CartItem2 {
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
}
