import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { cartReducer } from './app/cart/store/cart.reducer';

bootstrapApplication(AppComponent, {
  providers: [provideStore({ cart: cartReducer })]
}).catch(err => console.error(err));
