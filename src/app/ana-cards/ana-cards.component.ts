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
  data: any;
  index:any;
  stock:any;

  constructor(private cardDetailsService: CardDetailsService ) { 

  }
  ngOnInit(): void {
    this.stocks=this.cardDetailsService.getList();
  }
 getdetails(data : number){
    this.index=data-1;
    this.cardDetailsService.getselecteditem(this.stocks[this.index]);
 }
incrementCount(){
  this.cardDetailsService.incrementCount();
}
decreaseCount(){
  this.cardDetailsService.decreaseCount();
}
resetCount(){
  this.cardDetailsService.resetCount();
}
}

