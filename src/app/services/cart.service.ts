import { importProvidersFrom, Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Foods } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(Food:Foods) : void {
    let cartItem = this.cart.items.find(item => item.food.id === Food.id)
    if(cartItem) {
      this.changeQuantity(Food.id , cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new CartItem(Food));
  }
  removeFromCart(foodId:number): void {
    this.cart.items = this.cart.items.filter(item => item.food.id !=foodId)
  }
  changeQuantity(quantity: number, foodId:number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }
  getCart() : Cart{
    return this.cart;
  }
}
