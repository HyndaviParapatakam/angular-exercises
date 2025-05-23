import { createAction, props } from '@ngrx/store';
import { CartItem } from './cart.model';

export const addItem = createAction('[Cart] Add Item', props<{ item: CartItem }>());
export const removeItem = createAction('[Cart] Remove Item', props<{ id: number }>());
export const updateQuantity = createAction('[Cart] Update Quantity', props<{ id: number, quantity: number }>());
