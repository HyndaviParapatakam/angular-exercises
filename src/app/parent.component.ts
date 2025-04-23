import { Component } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent], // ✅ Add this
  template: `
    <h2>Parent Component</h2>
    <button (click)="changeName()">Change Name</button>
    <button (click)="addItem()">Add Item</button>
    <app-child [name]="name" [items]="items"></app-child>
  `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  name = 'Angular';
  items = [{ id: 1, value: 'Item 1' }];

  changeName() {
    this.name += '!';
  }

  addItem() {
    this.items = [...this.items, { id: this.items.length + 1, value: `Item ${this.items.length + 1}` }];
  }
}
