import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DepartmentComponent } from './department/department.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'home', component: HomeComponent },
  { path: 'deparment/:category', component: DepartmentComponent },
  { path: 'deparment/:category/:product-type', component: ProductsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}