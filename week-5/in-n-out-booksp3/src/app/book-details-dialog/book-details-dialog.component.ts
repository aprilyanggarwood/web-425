/*
 Title: book-details-dialog.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/20/2022
 Description: Assignment 5.4 - Dialogs
Resources: Material Design https://material.io
*/



import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { Observable } from 'rxjs';
import { BookListComponent } from '../book-list/book-list.component';



@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.scss']
})
export class BookDetailsDialogComponent implements OnInit {


// book!: Observable<IBook>;
//
  book!: IBook;
  // IBook: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];


  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

   this.book = {
        isbn:'',
        title:'',
        description: '',
        numOfPages: 0,
        authors: ['']
      }



    this.book.title = data.book.title;
    this.book.isbn = data.book.isbn;
    this.book.authors = data.book.authors;
    this.book.numOfPages = data.book.numOfPages;
    this.book.description = data.book.description;



  }

  ngOnInit(): void {
  }

}
