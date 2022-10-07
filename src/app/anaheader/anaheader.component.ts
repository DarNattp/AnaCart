import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { LoginComponent } from 'src/app/login/login.component';
@Component({
  selector: 'app-anaheader',
  templateUrl: './anaheader.component.html',
  styleUrls: ['./anaheader.component.css']
})
export class AnaheaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  ngOnInit(): void {  }
  title = 'Angularapp';
  openDialog() {
    this.dialog.open(LoginComponent);

  }
}