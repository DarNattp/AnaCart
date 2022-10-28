import { Component, OnInit } from '@angular/core';
import { CardDetailsService } from '../services/card-details.service';
import { stock } from '../stock';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css'],
})
export class CartComponentComponent implements OnInit {
  stocks: stock[] | any;
  stock: any;
  data: any;
  index: any;

  constructor(public cardDetailsService: CardDetailsService) {}

  ngOnInit(): void {
    this.stock = this.cardDetailsService.getList();
  }
  getdetails(data: number) {
    this.index = data - 1;
    this.cardDetailsService.getselecteditem(this.stock[this.index]);
  }
}
