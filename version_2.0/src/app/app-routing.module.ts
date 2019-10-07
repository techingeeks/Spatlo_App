import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'view-menu', loadChildren: './pages/view-menu/view-menu.module#ViewMenuPageModule' },
  { path: 'view-product', loadChildren: './pages/view-product/view-product.module#ViewProductPageModule' },
  { path: 'order-product', loadChildren: './pages/order-product/order-product.module#OrderProductPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
