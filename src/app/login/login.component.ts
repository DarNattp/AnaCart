import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import {MatDialog, _closeDialogVia} from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  book={
    name:'',
    username:'',
    city:'',
    zip:'',
  }
  isDataAdded = false;
  
  // book: any;
  // booksService: any;
  // isBookAdded: boolean;
  constructor(private booksService:BooksService,public dialog: MatDialog) {}

  ngOnInit(): void {}

  addBook(): void {
    const data = {
      name: this.book.name,
      username: this.book.username,
      city:this.book.city,
      zip:this.book.zip,
    };
    if (!data.name) {
      alert('Please add details!');
      return;
    }
    

    this.booksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isDataAdded = true;
        })
      this.closeDialog();

       
  
}
closeDialog() {
  this.dialog.closeAll();
}
}
