import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {RestaurantsService} from '../../restaurants/restaurants.service'
import {Observable} from 'rxjs/Observable'



@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restaurantsService: RestaurantsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //	Estou em uma sub rota e o parametro não é desse componente e sim do componente parent
    this.reviews = this.restaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}
