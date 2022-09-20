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
