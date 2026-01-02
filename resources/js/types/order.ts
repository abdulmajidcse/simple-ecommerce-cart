import { Product } from './product';

export interface OrderItem {
    id: number;
    quantity: number;
    price: number;
    product: Product;
}

export interface Order {
    id: number;
    total_amount: number;
    created_at: string;
    items: OrderItem[];
}
