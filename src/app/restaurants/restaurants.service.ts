import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Restaurant} from './restaurant/restaurant.module';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

import {MEAT_API} from 'app/app.api';

@Injectable()
export class RestaurantsService {

//     rests: Restaurant[] = [
//     {
//       id: 'bread-bakery',
//       name: 'Bread & Bakery',
//       category: 'Bakery',
//       deliveryEstimate: '25m',
//       rating: 4.9,
//       imagePath: 'assets/img/restaurants/breadbakery.png'
//     },
//     {
//       id: 'burger-house',
//       name: 'Burger House',
//       category: 'Hamburgers',
//       deliveryEstimate: '100m',
//       rating: 3.5,
//       imagePath: 'assets/img/restaurants/burgerhouse.png'
//     }
//   ];

  constructor(private http: HttpClient){}

    // restaurants(): Restaurant[] {
    //    return this.rests; 
    //}    

   restaurants(search?: string): Observable<Restaurant[]> {
     let params: HttpParams = undefined;
    if (search) {
      params = new HttpParams().set('q', search);

      // pu append
      params = new HttpParams().append('q', search);
    }

       // Alterar restaurants para restaurants1 para gerar o erro 404 Not Found
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, {params: params});
   };

   restaurantsById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
  }

  reviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
      // .map(Response => Response.json())
     // .catch(ErrorHandler.handleError);  
  }

}