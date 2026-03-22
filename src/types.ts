export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
  category: 'Burgers' | 'Chicken' | 'Sides' | 'Drinks' | 'Desserts';
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  discount: string;
  expiry: string;
  image: string;
}
