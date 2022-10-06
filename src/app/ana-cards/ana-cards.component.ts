import { Component, OnInit } from '@angular/core';
import { CardDetailsService } from '../services/card-details.service';
import { stock } from '../stock';

@Component({
  selector: 'app-ana-cards',
  templateUrl: './ana-cards.component.html',
  styleUrls: ['./ana-cards.component.css']
})
export class AnaCardsComponent implements OnInit {

  stocks:stock[] |any;
  CardDetailsService: any;
  data: any;
  index:any;
  stock:any;

  constructor() { 
      this.CardDetailsService= new CardDetailsService;
  }
  ngOnInit(): void {
    this.stocks=this.CardDetailsService.getList();
  }
 getdetails(data : number){
    this.index=data-1;
    this.CardDetailsService.getselecteditem(this.stocks[this.index]);
 }
}
