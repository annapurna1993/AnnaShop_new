import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CategoryService } from './category.service';

import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { NgModule, Component } from '@angular/core';        
import { BrowserModule } from '@angular/platform-browser';      
import { AppComponent } from './app.component';        
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';        
import { getAuth, provideAuth } from '@angular/fire/auth';        
import { getFirestore, provideFirestore } from '@angular/fire/firestore';        
import { getStorage, provideStorage } from '@angular/fire/storage';        
import { getAnalytics, provideAnalytics } from '@angular/fire/analytics'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { RouterModule } from '@angular/router';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';               
import { CheckOutComponent } from './check-out/check-out.component';
import { NewproductComponent } from './newproduct/newproduct.component';
@NgModule({
  declarations: [        
    AppComponent, BsNavbarComponent, HomeComponent, ShoppingCartComponent, NewproductComponent, AdminProductsComponent
  ],
  imports: [ 
    provideFirestore(() => getFirestore()),  
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),  
    provideStorage(() => getStorage()),  
    provideAnalytics(() => getAnalytics()),  
    BrowserModule,  
    AngularFireAuthModule,
    AngularFireModule,
    AngularFireDatabase,
    NgbModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent}, 
      {path:'products', component: ProductsComponent},
      {path:'shopping/cart', component: ShoppingCartComponent},
      {path:'login', component: LoginComponent},
      {path:'order/success', component: OrderSuccessComponent},
      {path:'my/orders', component: MyOrdersComponent},
      {path:'check/out', component: CheckOutComponent},
      {path:'admin/products', component: AdminProductsComponent},
      {path:'newproduct', component: NewproductComponent},
      {path:'admin/orders', component: AdminOrdersComponent}
    ])
  ],  
  providers: [
    CategoryService
  ],  
  bootstrap: [AppComponent]  
 })    
export class AppModule { }