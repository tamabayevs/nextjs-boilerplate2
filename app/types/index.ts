export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

export interface OrderItem {
  productId: string;
  quantity: number;
} 