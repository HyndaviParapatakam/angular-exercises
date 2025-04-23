
# Angular Exercises: Change Detection & NgRx Shopping Cart
- **2.1 Change Detection**
- **2.2 NgRx Shopping Cart**

---

## How to Run This Project

### 1. Clone or Download

```bash
git clone <your-repo-url>
cd angular-exercises
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
ng serve
```

### 4. Open in browser

Visit: [http://localhost:4200](http://localhost:4200)

---

## Application Structure

### 2.1 Change Detection

- **Parent Component**
  - Button to change a name string
  - Button to add a new item (trigger change detection)
- **Child Component (OnPush)**
  - Receives `@Input()` props
  - Logs `ngOnChanges` and `ngDoCheck`
  - Uses a pure pipe (`PureUppercasePipe`) for name
  - Optimized rendering using `trackBy`

### 2.2 NgRx Shopping Cart

- State managed with **NgRx Store**
- Actions: `addItem`, `removeItem`, `updateQuantity`
- Selectors: `selectCartItems`, `selectCartTotal`, `selectCartCount`
- **Meta-reducer** to sync cart state with `localStorage`
- Responsive and modern UI with:
  - Input form (name, price, quantity)
  - List of items with editable quantity and remove button
  - Cart summary (total items, total price)

---

## 📦 Features Covered

| Feature                                 | Implemented |
|----------------------------------------|-------------|
| `ChangeDetectionStrategy.OnPush`       | ✅          |
| Lifecycle hooks (`ngOnChanges`, `ngDoCheck`) | ✅    |
| Pure pipes and trackBy optimizations   | ✅          |
| NgRx Store setup and integration       | ✅          |
| Add/Remove/Update cart actions         | ✅          |
| Selectors for derived state            | ✅          |
| `localStorage` sync via meta-reducer   | ✅          |
| UI Styling and responsiveness          | ✅          |
| Lazy-loaded cart module with isolated state | ✅    |

---

## Useful Tips

- To test `OnPush`, open browser dev tools and watch console logs while changing inputs.
- Try refreshing after adding cart items — data persists!
- You can extend the app with `NgRx Effects` for API calls later.

---

## Screenshots

Include screenshots inside a `/screenshots` folder if needed.

---

## Credits

Created with by Hyndavi Reddy as part of hands-on frontend architecture and NgRx exploration.
