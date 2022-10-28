import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.css']
})
export class SettingsComponentComponent implements OnInit {
  books: any;
  currentBook:any;
  currentIndex = -1;
  searchTitle = '';
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(): void {
    this.booksService.list()
      .subscribe(
        (books: any) => {
          this.books = books;
        });
  }

  // Delete action
  deleteBook(id:number){
    this.booksService.delete(id)
    .subscribe(
      response => {
        this.getAllBooks();
      });
  }
}
