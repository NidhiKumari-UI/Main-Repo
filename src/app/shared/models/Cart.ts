import { CartItem } from "./CartItem";

export class Cart {
    items: CartItem[] = [];
    
    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += Number(item.Price); 
        });
        return totalPrice;
    }

}