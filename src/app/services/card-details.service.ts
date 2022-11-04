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
        ImageUrl: 'https://images.bewakoof.com/t1080/men-s-solid-red-hoodie-364989-1656196912-1.jpg',
        ItemName: 'Men\'s Red Gravity Graphic Printed Hoodie',
        Price: '₹1099',
        Category:'T-Shirts',
        Caption: 'Made with fine cotton',
      },
      {
        Id: 9,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/9246/864/800/2/w/563/9246864800_1_1_1.jpg?ts=1666959137003',
        ItemName: 'VELVET CAMISOLE DRESS',
        Price: '₹4999',
        Category:'Floral Shirts',
        Caption: 'Midi dress with a surplice neckline and thin straps with bead appliqués.',
      },
      {
        Id: 10,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/4043/287/832/2/w/563/4043287832_1_1_1.jpg?ts=1667378850455',
        ItemName: 'CULOTTE TROUSERS',
        Price: '₹999',
        Category:'Floral Shirts',
        Caption: 'High-waist culottes with visible seams and a wide-leg design',
      },
      {
        Id: 11,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/3327/684/330/2/w/563/3327684330_2_3_1.jpg?ts=1652190844182',
        ItemName: 'PRINTED MIDI DRESS',
        Price: '₹2999',
        Category:'Floral Shirts',
        Caption: 'V-neck midi dress with long sleeves. Tied belt in the same fabric',
      },
      {
        Id: 12,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/9479/243/671/2/w/563/9479243671_1_1_1.jpg?ts=1662368974861',
        ItemName: 'BLOUSE WITH TIE',
        Price: '₹4999',
        Category:'Floral Shirts',
        Caption: 'Blouse made of viscose.',
      },
      {
        Id: 13,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/1934/244/800/3/w/563/1934244800_1_1_1.jpg?ts=1662020193186',
        ItemName: 'ZW THE MARINE STRAIGHT JEANS',
        Price: '₹4999',
        Category:'Floral Shirts',
        Caption: 'Slim Fit - Relaxed Leg - High Rise - Power Stretch Fabric',
      },
      {
        Id: 14,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/2731/246/802/2/w/563/2731246802_2_1_1.jpg?ts=1657643511782',
        ItemName: 'LINEN SHIRT WITH PIPING',
        Price: '₹999',
        Category:'Floral Shirts',
        Caption: 'Collared shirt made of 100% linen. Long sleeves with cuffs',
      },
      {
        Id: 15,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/2731/045/250/2/w/563/2731045250_1_1_1.jpg?ts=1660899216169',
        ItemName: 'OVERSIZED POPLIN SHIRT',
        Price: '₹2999',
        Category:'Floral Shirts',
        Caption: 'Loose-fitting collared shirt with long cuffed sleeves',
      },
      {
        Id: 16,
        ImageUrl: 'https://static.zara.net/photos///2022/I/0/1/p/8547/561/800/2/w/563/8547561800_1_1_1.jpg?ts=1667401682496',
        ItemName: 'LONG CAPE DRESS',
        Price: '₹4999',
        Category:'Floral Shirts',
        Caption: 'Long dress made of a viscose blend.',
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

