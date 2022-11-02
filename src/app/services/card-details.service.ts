import { Injectable } from '@angular/core';
import { stock } from '../stock';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  notificationCount = new Subject();

  static getitem(): any {
    throw new Error('Method not implemented.');
  }
  store: any;

  constructor() { }


  getselecteditem(selected: any) {
    this.store = selected;
    localStorage.setItem("currentselecteditem", JSON.stringify(this.store));
  }

  public getList() {
    let stocks: stock[];
    stocks = [
      {
        Id: 1,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 2,
        ImageUrl: 'https://images.bewakoof.com/t1080/men-s-full-sleeve-t-shirts-1094-1659608683-1.jpg',
        ItemName: 'Black T-shirt',
        Price: '₹499',
        Category:'Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 3,
        ImageUrl: 'https://images.bewakoof.com/t640/men-s-red-headphone-beats-graphic-printed-t-shirt-483041-1655748881-1.jpg',
        ItemName: 'Red T-shirt',
        Price: '₹499',
        Category:'Shirts',
        Caption: 'Made with fine cotton',
      },

      {
        Id: 4,
        ImageUrl: 'https://images.bewakoof.com/t1080/black-relaxed-fit-crew-neck-sweatshirt-364908-1656171528-1.jpg',
        ItemName: 'Black Over-Sized T-shirt',
        Price: '₹799',
        Category:'Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 5,
        ImageUrl: 'https://images.bewakoof.com/t1080/no-mad-layered-sweatshirt-hoodie-368592-1656181273-1.jpg',
        ItemName: 'Men No Mad Layered Oversized Sweatshirt Hoodie',
        Price: '₹99',
        Category:'T-Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 6,
        ImageUrl: 'https://images.bewakoof.com/t1080/arriving-from-space-layered-hoodie-sweatshirt-369814-1656184963-1.jpg',
        ItemName: 'Men\'s Purple Layered Sleeve Oversized Hoodie',
        Price: '₹999',
        Category:'T-Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 7,
        ImageUrl: 'https://images.bewakoof.com/t1080/men-s-black-itachi-moment-graphic-printed-oversized-sweatshirt-551734-1666962189-1.jpg',
        ItemName: 'Men\'s Black Itachi Moment Graphic Printed Oversized Sweatshirt',
        Price: '₹1099',
        Category:'T-Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 8,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'T-Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 9,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'Floral Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 10,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'Floral Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 11,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'Floral Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 12,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'Floral Shirts',
        Caption: 'Made with fine cotton',
      },
    ]
    return stocks;
  }


  public category() {
    let stocks: stock[];
    stocks = [
      {
        Id: 1,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹499',
        Category:'Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 2,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹4999',
        Category:'T-Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 3,
        ImageUrl: 'https://images.bewakoof.com/uploads/grid/app/types-of-t-shirts-for-men-bewakoof-blog-Crew-Neck-Style-1612353776.jpg',
        ItemName: 'White T-shirt',
        Price: '₹4990',
        Category:'Floral Shirts',
        Caption: 'Made with fine cotton',
      },

    ]
    return stocks;
  }


 
  count: number = 0;
  incrementCount() {
    this.count++;
    this.notificationCount.next(this.count);
 
  }
 
  decreaseCount() {
    if (this.count < 1)
      return;
    this.count--;
 
    this.notificationCount.next(this.count);
 
 
  }
 
  resetCount() {
 
    this.count = 0;
 
    this.notificationCount.next(this.count);
 
  }
}

