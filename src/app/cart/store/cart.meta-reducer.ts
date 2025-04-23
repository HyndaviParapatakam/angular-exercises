import { MetaReducer } from '@ngrx/store';
import { CartItem } from './cart.model';

export const localStorageSyncReducer: MetaReducer<CartItem[]> = (reducer) => {
  return (state, action) => {
    const nextState = reducer(state, action);
    localStorage.setItem('cart', JSON.stringify(nextState));
    return nextState;
  };
};
