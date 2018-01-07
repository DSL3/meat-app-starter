import { ActivatedRoute} from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { RestaurantsService} from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.module';

import {Router} from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private restaurantsService: RestaurantsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantsService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.getRestaurante(restaurant),
    error => {
      this.router.navigate(['/not-found']);
   });
  }

  getRestaurante(param: Restaurant) {

    this.restaurant = param;
    console.log(` this.restaurant ${param}`);
  }

}
