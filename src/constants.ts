import { MenuItem, Deal } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Zinger Burger',
    description: 'Our signature spicy chicken fillet burger with fresh lettuce and mayo.',
    price: 5.99,
    calories: 450,
    image: 'https://picsum.photos/seed/zinger/400/300',
    category: 'Burgers'
  },
  {
    id: '2',
    name: '8 Piece Bucket',
    description: '8 pieces of our Original Recipe chicken. Perfect for sharing.',
    price: 18.99,
    calories: 1200,
    image: 'https://picsum.photos/seed/bucket/400/300',
    category: 'Chicken'
  },
  {
    id: '3',
    name: 'Large Fries',
    description: 'Golden, crispy potato fries seasoned to perfection.',
    price: 2.49,
    calories: 380,
    image: 'https://picsum.photos/seed/fries/400/300',
    category: 'Sides'
  },
  {
    id: '4',
    name: 'Pepsi Max 500ml',
    description: 'Maximum taste, no sugar.',
    price: 1.99,
    calories: 0,
    image: 'https://picsum.photos/seed/pepsi/400/300',
    category: 'Drinks'
  },
  {
    id: '5',
    name: 'Chocolate Sundae',
    description: 'Soft serve vanilla ice cream with rich chocolate sauce.',
    price: 2.99,
    calories: 280,
    image: 'https://picsum.photos/seed/sundae/400/300',
    category: 'Desserts'
  },
  {
    id: '6',
    name: 'Popcorn Chicken',
    description: 'Bite-sized pieces of real chicken breast in our spicy coating.',
    price: 4.49,
    calories: 320,
    image: 'https://picsum.photos/seed/popcorn/400/300',
    category: 'Chicken'
  }
];

export const DEALS: Deal[] = [
  {
    id: 'd1',
    title: '20% Off First Order',
    description: 'Welcome to the Colonel\'s Club! Use code WELCOME20.',
    discount: '20%',
    expiry: 'Limited Time',
    image: 'https://picsum.photos/seed/deal1/600/400'
  },
  {
    id: 'd2',
    title: 'Family Feast Bundle',
    description: '10 pieces of chicken + 4 sides + 1.5L drink.',
    discount: 'Save £5',
    expiry: 'Ends Sunday',
    image: 'https://picsum.photos/seed/deal2/600/400'
  }
];
