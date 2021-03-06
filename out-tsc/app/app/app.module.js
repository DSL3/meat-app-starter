var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
///*todo*/import { RestaurantsService } from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
///*todo*/import {ShoppingCartService} from './restaurant-detail/shopping-cart/shopping-cart.service';
//import { OrderComponent } from './order/order.component';
//import { InputComponent } from './shared/input/input.component';
//import { RadioComponent } from './shared/radio/radio.component';
//import { OrderItemsComponent } from './order/order-items/order-items.component';
///*todo*/import{ OrderService} from './order/order.service';
//import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
//import { RatingComponent } from './shared/rating/rating.component';
import { SharedModule } from './shared/shared.modules';
import { NotFoundComponent } from './not-found/not-found.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
        ],
        imports: [
            BrowserModule,
            BrowserAnimationsModule,
            HttpModule,
            // FormsModule,
            // ReactiveFormsModule,
            SharedModule.forRoot(),
            RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }) //problema com o lazy load ao gerar o ng build --prod
        ],
        providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map