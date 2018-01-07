import {Injectable} from '@angular/core';

// Headers, RequestOptions
import { HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { CartItem} from '../restaurant-detail/shopping-cart/cart-item.model';
import { ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service';
import {Order, OrderItem} from './order.model';

import { MEAT_API} from '../../app/app.api';

@Injectable()
export class OrderService {

    constructor (private cartservice: ShoppingCartService,
                 private http: HttpClient) {}

    itemsValue(): number {
        return this.cartservice.total();
    }

    cartItems(): CartItem[] {
        return this.cartservice.items;
    }

    increaseQty(item: CartItem) {
        this.cartservice.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartservice.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartservice.removeItem(item);
    }

    clear() {
        this.cartservice.clear();
    }

    checkOrder(order: Order): Observable<string> {
       return this.http.post<Order>(`${MEAT_API}/orders`, order)
                       .map(order => order.id);

    //   return this.http.post(`${MEAT_API}/orders`,
    //                    JSON.stringify(order),
    //                    new RequestOptions({headers: headers }))
    //               .map(response => response.json())
    //               .map(order => order.id);
    }
}
