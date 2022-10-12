import { Component, OnInit } from '@angular/core';
import { stock } from '../stock';
import { CardDetailsService } from '../services/card-details.service';

@Component({
  selector: 'app-ana-body',
  templateUrl: './ana-body.component.html',
  styleUrls: ['./ana-body.component.css']
})
export class AnaBodyComponent implements OnInit {
   
  stocks:stock[] |any;
  CardDetailsService: any;
  stock:any;
  index:any;

  constructor() { 
    this.CardDetailsService= new CardDetailsService;
  }

  ngOnInit(): void {
    this.stocks=this.CardDetailsService.getList().slice(0,4);
  }
  getdetails(data : number){
    this.index=data-1;
    this.CardDetailsService.getselecteditem(this.stocks[this.index]);
 }

}
