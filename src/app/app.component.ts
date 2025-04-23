import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';
import { CartComponent } from './cart/cart.component'; // ✅ Import CartComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, CartComponent], // ✅ Add it to imports
  template: `
    <h1>Angular Exercises</h1>

    <section>
      <h2>2.1 Change Detection</h2>
      <app-parent></app-parent>
    </section>

    <section style="margin-top: 40px;">
      <h2>2.2 NgRx Shopping Cart</h2>
      <app-cart></app-cart> <!-- ✅ This will now work -->
    </section>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
