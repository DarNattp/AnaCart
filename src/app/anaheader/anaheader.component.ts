import { Component, OnInit} from '@angular/core';
import {MatDialog, _closeDialogVia} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
import { CardDetailsService } from '../services/card-details.service';
@Component({
  selector: 'app-anaheader',
  templateUrl: './anaheader.component.html',
  styleUrls: ['./anaheader.component.css']
})
export class AnaheaderComponent implements OnInit {
  notificationCount: number;

  constructor(public dialog: MatDialog,
    public cardDetailsService: CardDetailsService) { 
    this.notificationCount = 0;
    } 
  ngOnInit(): void { 

    this.cardDetailsService.notificationCount.subscribe((res: any) => {  

      this.notificationCount = res;  

    })

   }
  title = 'Angularapp';
  openDialog() {
    this.dialog.open(LoginComponent,
      {
        width:'50%'
      
    });
  }
  closeDialog() {
    this.dialog.closeAll();
  }
}

