import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  constructor(private booksService:BooksService) {}

  ngOnInit(): void {}

  addBook(): void {
    const data = {
      name: this.book.name,
      username: this.book.username,
      city:this.book.city,
      zip:this.book.zip
    };
    if (!data.name) {
      alert('Please add title!');
      return;
    }

    this.booksService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.isDataAdded = true;
        })
  
}
}
