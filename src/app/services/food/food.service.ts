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
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 3,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 2,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 2,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 3,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 4,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 4,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 1,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 5,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 4,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 6,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 5,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 7,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 3,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    {
      id: 8,
      name: 'Pizza',
      cookTime: '10-20',
      price: 10,
      favorite: false,
      origins: ['italy'],
      star: 4,
      imageUrl: '/assets/food.jpeg',
      tags: ['FastFood', 'Pizza', 'Lunch']
    },
    ]
  }
}
