import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin-module').then(m => m.AdminModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop-module').then(m => m.ShopModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart-module').then(m => m.CartModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout-module').then(m => m.CheckoutModule)
  },
  { path: '**', redirectTo: '' }
];
