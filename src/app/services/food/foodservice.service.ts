import { Injectable } from '@angular/core';
import { foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodserviceService {

  constructor() { }

  getAll():foods[]{
    return[
      {
        id:1,
        name: 'Pizza Pepperoni',
        cookingTime: '10-20',
        price: 10,
        favorite: true,
        origins: ['italy'], 
        stars: 4.5,
        imageUrl: 'assets/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:2,
        name: 'Meatball',
        price: 20,
        cookingTime: '20-30',
        favorite: true,
        origins: ['persia ,', 'middle east ,', 'china'],
        stars: 4.7,
        imageUrl: 'assets/chicken-leg.jpeg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:3,
        name: 'thali',
        price: 5,
        cookingTime: '10-15',
        favorite: false,
        origins: ['indian ,', 'us'],
        stars: 3.5,
        imageUrl: 'assets/thali.jpeg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id:4,
        name: 'Fried Potatoes',
        price: 2,
        cookingTime: '15-20',
        favorite: true,
        origins: ['belgium ,', 'france'],
        stars: 3.3,
        imageUrl: 'assets/fries.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id:5,
        name: 'Chicken Soup',
        price: 11,
        cookingTime: '40-50',
        favorite: false,
        origins: ['india ,', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/chicken-soup.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:6,
        name: 'Vegetables Pizza',
        price: 9,
        cookingTime: '40-50',
        favorite: true,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id:7,
        name: 'Spicy Cheese Burger',
        price: 12,
        cookingTime: '20-30',
        favorite: false,
        origins: ['Indian'],
        stars: 4.0,
        imageUrl: 'assets/burger.webp',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id:8,
        name: 'Vegetables Magento Pizza',
        price: 9,
        cookingTime: '45-50',
        favorite: true,
        origins: ['indian'],
        stars: 4.0,
        imageUrl: 'assets/pizza.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      }
    ]
  }
}
