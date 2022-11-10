import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
@Component({
  selector: 'app-settings-component',
  templateUrl: './settings-component.component.html',
  styleUrls: ['./settings-component.component.css']
})
export class SettingsComponentComponent implements OnInit {
  currentBook:any;
  currentIndex = -1;
  searchTitle = '';
  constructor(public booksService: BooksService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks(): void {
    this.booksService.list()
      .subscribe(
        (books: any) => {
          this.booksService.availablebooks = books;
        });
  }

  // Delete action
  deleteBook(id:number){
    alert('The record will be deleted');
    this.booksService.delete(id)
    .subscribe(
      _response => {
        this.booksService.availablebooks= this.booksService.availablebooks.filter((b: any) => b.id != id);
      });
  }
}
