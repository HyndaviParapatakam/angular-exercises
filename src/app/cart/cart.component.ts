import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NgForOf, AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ FIXED

import { CartItem } from './store/cart.model';
import { selectCartItems, selectCartTotal, selectCartCount } from './store/cart.selectors';
import { addItem, removeItem, updateQuantity } from './store/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [NgForOf, AsyncPipe, FormsModule]
})
export class CartComponent {
  items$!: Observable<CartItem[]>;
  total$!: Observable<number>;
  count$!: Observable<number>;

  newItem: Partial<CartItem> = {
    name: '',
    price: 0,
    quantity: 1
  };

  private nextId = 100;

  constructor(private store: Store) {
    this.items$ = this.store.select(selectCartItems);
    this.total$ = this.store.select(selectCartTotal);
    this.count$ = this.store.select(selectCartCount);
  }

  addNewItem() {
    if (!this.newItem.name || !this.newItem.price || !this.newItem.quantity) return;

    const item: CartItem = {
      id: this.nextId++,
      name: this.newItem.name,
      price: this.newItem.price,
      quantity: this.newItem.quantity
    };

    this.store.dispatch(addItem({ item }));
    this.newItem = { name: '', price: 0, quantity: 1 };
  }

  removeItem(id: number) {
    this.store.dispatch(removeItem({ id }));
  }

  updateQuantity(id: number, quantity: number) {
    this.store.dispatch(updateQuantity({ id, quantity }));
  }
}
