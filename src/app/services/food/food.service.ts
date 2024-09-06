import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): string[] {
    return [
      '/assets/food.jpeg',
      '/assets/food.jpeg',
      '/assets/food.jpeg',
      '/assets/food.jpeg',
      '/assets/food.jpeg',
      '/assets/food.jpeg',
      '/assets/food.jpeg',
      '/assets/food.jpeg',
    ]
  }
}
