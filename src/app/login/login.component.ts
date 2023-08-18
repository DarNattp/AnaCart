import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import {MatDialog, _closeDialogVia} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  
show: boolean = false;

  [x: string]: any;

  book={
    name:'',
    mailid:'',
    password:'',
    reEnteredPassword:'',
  }
  isDataAdded = false;

  constructor(private booksService:BooksService,public dialog: MatDialog) {
 
  }
  password() {
    this.show = !this.show;
}

  ngOnInit(): void {}

  addBook(): void {
    const data = {
      name: this.book.name,
      mailid: this.book.mailid,
      password:this.book.password,
      reEnteredPassword:this.book.reEnteredPassword,
    };
    if (!data.name) {
      alert('Please add details!');
      this.isDataAdded = false;
      return;
    }
    if (!data.mailid) {
      alert('Please add details!');
      this.isDataAdded = false;
      return;
    }
    if (!data.password) {
      alert('Please add details!');
      this.isDataAdded = false;
      return;
    }
    if (!data.reEnteredPassword) {
      alert('Please add details!');
      this.isDataAdded = false;
      return;
    }
    this.booksService.create(data)
      .subscribe(
        response => {
          this.booksService.availablebooks.push(data);
          console.log(response);
          this.isDataAdded = true;
        })
      this.closeDialog();
}
closeDialog(){
  this.dialog.closeAll();
}

}

