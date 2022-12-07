/*
 Title: book-list.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/26/2022
 Description: Assignment 6.2 - Output Properties
Resources: Material Design https://material.io
*/



import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../book.interface';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { keyValuesToMap, stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import { STRING_TYPE } from '@angular/compiler';



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

books: Array<IBook> = [];
book!: IBook;


constructor(private booksService: BooksService, private dialog: MatDialog) {

  this.booksService.getBooks().subscribe(res => {
    console.log(res);
    for (let key in res) {
      // if (res.hasOwnProperty(key)) {
      //   let authors = [];

      //   if (res[key].details.authors) {

      //     authors = res[key].details.authors.map(function (author:any) {
      //       return author.name;
      //     })
      //   }
      // }
    }

  //   this.books.push({
  //     isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
  //     title: res[key].details.title,
  //     description: res[key].details.subtitle ? res[key].details.subtile: 'N/A',
  //     numOfPages: res[key].details.number_of_pages,
  //     authors: this.book.authors

  //  })


  })


  }

  ngOnInit(): void {
  }

showBookDetails(isbn: string){
  // this.book = this.books.find(book => book.isbn === isbn);

  // const dialogRef = this.dialog.open(BookDetailsDialogComponent, { data: { book: this.book, disableClose: true, width: '800px'} });


// dialogRef.afterClosed().subscribe(result => {
//   if (result === 'confirm') {
//     this.book == null;
//       }
//     });
     console.log(this.book);
}
}
