import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Foods[]  {
    return [
    {
      id: 1,
      name: 'Burger',
      cookTime: '20-30',
      price: 30,
      favorite: false,
      origins: ['Czech Republic'],
      star: 3,
      imageUrl: '/assets/food1.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 2,
      name: 'Pasta',
      cookTime: '10-20',
      price: 40,
      favorite: false,
      origins: ['Belgium'],
      star: 2,
      imageUrl: '/assets/food2.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 3,
      name: 'Pizza',
      cookTime: '30-40',
      price: 30,
      favorite: false,
      origins: ['Germany'],
      star: 4,
      imageUrl: '/assets/food3.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 4,
      name: 'Lolipop',
      cookTime: '40-50',
      price: 60,
      favorite: false,
      origins: ['Hungary'],
      star: 1,
      imageUrl: '/assets/food4.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 5,
      name: 'Sandwich',
      cookTime: '50-60',
      price: 50,
      favorite: false,
      origins: ['Greece'],
      star: 4,
      imageUrl: '/assets/food5.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 6,
      name: 'MeatBowl',
      cookTime: '20-30',
      price: 30,
      favorite: false,
      origins: ['itLuxembourgaly'],
      star: 5,
      imageUrl: '/assets/food6.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 7,
      name: 'chikenSoup',
      cookTime: '10-20',
      price: 70,
      favorite: false,
      origins: ['itSwedenaly'],
      star: 3,
      imageUrl: '/assets/food7.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 8,
      name: 'Burger&Donut',
      cookTime: '50-60',
      price: 50,
      favorite: false,
      origins: ['Netherlands'],
      star: 4,
      imageUrl: '/assets/food8.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    ]
  }
}
