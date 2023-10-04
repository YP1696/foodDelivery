import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../services/food/foodservice.service';
import { foods } from '../shared/model/food';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 foods : foods [] = [];
  constructor(private fs : FoodserviceService , private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params =>{
      if(params['searchItem']){
        this.foods = this.fs.getAll().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase( )))
      }else if(params['tag']){
        this.foods = this.fs.getAllFoodByTag(params['tag'])
        } 
      else{
        this.foods = this.fs.getAll();
      }
    })
    
  }

}
