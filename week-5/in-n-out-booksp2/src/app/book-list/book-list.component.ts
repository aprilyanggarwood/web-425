import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';

/*
 Title: book-list.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/20/2022
 Description: Assignment 5.3 - Data Tables
Resources: Material Design https://material.io
*/

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

books: Observable<IBook[]>;
header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
book!: IBook;

constructor(private booksService: BooksService) {
  this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

showBookDetails(isbn: string){
  this.book = this.booksService.getBook(isbn);
  console.log(this.book);
}
}
