export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'trucker' | 'full' | 'tshirt';
  image: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: number;
}

export interface CartItem extends Product {
  quantity: number;
  hasCustomText?: boolean;
}