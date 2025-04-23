import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CartItem } from './cart.model';

export const selectCartFeature = createFeatureSelector<CartItem[]>('cart');

export const selectCartItems = createSelector(selectCartFeature, state => state);
export const selectCartCount = createSelector(selectCartFeature, state =>
  state.reduce((count, item) => count + item.quantity, 0)
);
export const selectCartTotal = createSelector(selectCartFeature, state =>
  state.reduce((total, item) => total + item.price * item.quantity, 0)
);
