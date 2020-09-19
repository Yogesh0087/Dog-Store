import { PagingComponent } from './components/paging/paging.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{ path: '',component:HomeComponent},
{ path: 'account'  ,component:AccountComponent},
{ path: 'cart'  ,component:CartComponent},
{ path: 'home'  ,component:HomeComponent},
{ path: 'login'  ,component:LoginComponent},
{ path: 'logout'  ,component:LogoutComponent},
{ path: 'orders'  ,component:OrdersComponent},
{ path: 'products'  ,component:ProductsComponent},
{ path: 'sign-up'  ,component:SignUpComponent},
{ path: '** ' , component:NotFoundComponent},
{ path: 'cart-summary', component:CartSummaryComponent},
{path: 'not-found' , component:NotFoundComponent},
{path: 'paging' ,component:PagingComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
