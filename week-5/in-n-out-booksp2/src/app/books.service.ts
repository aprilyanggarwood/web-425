/*
 Title: books.service.ts
 Author: Professor Krasso
 Date: 11/20/2022
 Modified By: April Yang
 Description: Assignment 5.3 - Data Tables
 Resources: Material Design https://material.io
*/



import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9781519626295',
        title: 'The Art of War',
        description: 'The Ultimate Book of Ancient Chinese Military Strategy, Leadership and Politics',
        numOfPages: 136,
        authors: ['Sun-Tzu']
      },
      {
        isbn: '0670032549 ',
        title: 'The Gunslinger',
        description: 'The Dark Tower, Book 1',
        numOfPages: 231,
        authors: ['Stephen King']
      },
      {
        isbn: '9780099528531',
        title: 'Twenty Thousand Leagues Under the Sea',
        description: 'An adventure classic of deep-sea volcanoes, giant squid, and the renegade scientist Captain Nemo Professor Aronnax embarks on an expedition to hunt down and destroy a menacing sea monster. ',
        numOfPages: 256,
        authors: [ 'Jules Verne' ]
      },
      {
        isbn: '1514298139',
        title: 'The Return of the King',
        description: "The third volume in J.R.R. Tolkien's epic adventure THE LORD OF THE RINGS",
        numOfPages: 432,
        authors: ['J.R.R. Tolkien']
      },
      {
        isbn:'0062094351',
        title:'The Exorcist',
        description: 'William Peter Blattys groundbreaking story of faith and supernatural suspense',
        numOfPages: 400,
        authors: ['William Peter Blatty']
      }

   ]

  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
}

  getBook(isbn: string): IBook{
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
