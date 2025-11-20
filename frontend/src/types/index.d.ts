// Este archivo define tipos y interfaces utilizados en la aplicación.

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface User {
    id: number;
    name: string;
    email: string;
}

export interface ApiResponse<T> {
    data: T;
    message: string;
    success: boolean;
}