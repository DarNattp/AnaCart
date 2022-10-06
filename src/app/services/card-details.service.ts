import { Injectable } from '@angular/core';
import { stock } from '../stock';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {
  static getitem(): any {
    throw new Error('Method not implemented.');
  }
  store:any;

  constructor() { }
  getselecteditem(selected:any){
    this.store=selected;
   localStorage.setItem("currentselecteditem",JSON.stringify(this.store));
    }
  public getList(){
    let stocks:stock[];
    stocks = [
    {
      Id:1,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:2,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:3,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    
    {
      Id:4,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:5,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:6,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:7,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:8,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:9,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:10,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:11,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    {
      Id:12,
      ImageUrl:'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
      ItemName:'White T-shirt',
      Price:'₹499',
      Caption:'Made with fine cotton',
    },
    ]
    return stocks;
  }
}

