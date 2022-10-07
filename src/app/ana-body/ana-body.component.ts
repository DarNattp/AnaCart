import { Component, OnInit } from '@angular/core';
import { stock } from '../stock';
import { CardDetailsService } from '../services/card-details.service';

@Component({
  selector: 'app-ana-body',
  templateUrl: './ana-body.component.html',
  styleUrls: ['./ana-body.component.css']
})
export class AnaBodyComponent implements OnInit {
stocki :stock[] | any;
  CardDetailsService: CardDetailsService;

  constructor() { 
    this.CardDetailsService= new CardDetailsService;
  }

  ngOnInit(): void {
    this.stocki=this.CardDetailsService.getList();
  }

}
