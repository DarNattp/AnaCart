import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentBook: any;
  message = '';

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getBook(this.route.snapshot.paramMap.get('id'));
  }

  getBook(id: string | null): void {
    this.booksService.getItem(id)
      .subscribe(
        (book: null) => {
          this.currentBook = book;
          console.log(book);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.currentBook.name,
      mailid: this.currentBook.mailid,
      password:this.currentBook.password,
      reEnteredPassword:this.currentBook.reEnteredPassword,
      available: status
    };

    this.booksService.update(this.currentBook.id, data)
      .subscribe(
        response => {
          this.currentBook.available = status;
          console.log(response);
        });
  }

  updateBook(): void {
    this.booksService.update(this.currentBook.id, this.currentBook)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The product was updated!';
          this.router.navigate(['/settings']);
        });
  }

  deleteBook(): void {
    this.booksService.delete(this.currentBook.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/settings']);
        });
  }

}
