import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Aula 95 seção 10
// https://www.udemy.com/angular-pt/learn/v4/t/lecture/7033016?start=525
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { ApplicationErrorHandler } from  './app.error-handler';
import {ROUTES} from './app.routes';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';

// /*todo*/import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';

/// *todo*/import {ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service';
// import { OrderComponent } from './order/order.component';
// import { InputComponent } from './shared/input/input.component';
// import { RadioComponent } from './shared/radio/radio.component';
// import { OrderItemsComponent } from './order/order-items/order-items.component';

/// *todo*/import{ OrderService} from './order/order.service';
// import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
// import { RatingComponent } from './shared/rating/rating.component';

import { SharedModule } from './shared/shared.modules';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
  //  OrderComponent,
  //  InputComponent,
  //  RadioComponent,
  //  OrderItemsComponent,
  //  DeliveryCostsComponent,
    OrderSummaryComponent,
  NotFoundComponent,
  LoginComponent,
  UserDetailComponent,
    // RatingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
   // FormsModule,
   // ReactiveFormsModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}) // problema com o lazy load ao gerar o ng build --prod
  ],
  // Aula 95 seção 10
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
              {provide: LOCALE_ID, useValue: 'pt-BR'},
              {provide: ErrorHandler, useClass: ApplicationErrorHandler}],
//  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
