import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Cart } from './components/cart/cart.model';


import { environment } from './../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsComponent } from './components/products/products.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {FormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import{ProductsService} from './products.service';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { RouterModule } from '@angular/router';
import { PagingComponent } from './components/paging/paging.component';












@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    
    LogoutComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    ProductsComponent,
    NavbarComponent,
    NotFoundComponent,
    CartSummaryComponent,
    CartComponent,
    SignUpComponent,
    PagingComponent,

    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,

    
    HttpClientModule,
   
    
  ],
  providers: [AngularFirestore,ProductsService,Cart],
  bootstrap: [AppComponent]
})
export class AppModule { }
