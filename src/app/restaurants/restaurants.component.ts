import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Restaurant } from './restaurant/restaurant.module';
import {RestaurantsService} from './restaurants.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/from';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({ 
        opacity: 0,
        "max-height": "0px" })),
        state('visible', style({ 
          opacity: 1,
          "max-height": "70px",
          "marge-top": "20px" })),
         transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden';

 searchForm: FormGroup;
 searchControl: FormControl;

  restaurants: Restaurant[];

  constructor(private restaurantService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {
    //this.restaurants = this.restaurantService.restaurants();

    this.searchControl = this.fb.control('');
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    });

    this.searchControl.valueChanges
        .debounceTime(500) //espera 500 milesegundos entre dois eventos
        .distinctUntilChanged() //emitir eventos unicos que não se repetem um após o outro
        .do(searchTerm => console.log(`q=${searchTerm}`)) // apenas para obter o valor digitado e imprimir
        .switchMap(searchTerm =>  this.restaurantService.restaurants(searchTerm)
          .catch(error=> Observable.from([]))) //troca a cadeira por observable
        .subscribe(restaurants => this.restaurants = restaurants);

    this.restaurantService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants);

      document.getElementById('txtSearch').focus();
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }

}


