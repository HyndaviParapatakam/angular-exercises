import { createReducer, on } from '@ngrx/store';
import { addItem, removeItem, updateQuantity } from './cart.actions';
import { CartItem } from './cart.model';

export const initialState: CartItem[] = [
  { id: 1, name: 'Apple', price: 1.5, quantity: 2 },
  { id: 2, name: 'Banana', price: 1.0, quantity: 3 }
];

export const cartReducer = createReducer(
  initialState,
  on(addItem, (state, { item }) => {
    const existing = state.find(i => i.id === item.id);
    if (existing) {
      return state.map(i => i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i);
    }
    return [...state, item];
  }),
  on(removeItem, (state, { id }) => state.filter(item => item.id !== id)),
  on(updateQuantity, (state, { id, quantity }) => state.map(item => item.id === id ? { ...item, quantity } : item))
);
