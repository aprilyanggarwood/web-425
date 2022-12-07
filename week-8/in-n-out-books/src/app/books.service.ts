/*
 Title: books.service.ts
 Author: Professor Krasso
 Date: 11/20/2022
 Date: 11/26/2022
 Description: Assignment 6.2 - Output Properties
Resources: Material Design https://material.io
*/



import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { JsonPipe } from '@angular/common';



@Injectable({
  providedIn: 'root'
})
export class BooksService {
  // variable named isbns of type string array
  isbns: Array<string> =[
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    '9780590302715',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ];

  constructor(private http: HttpClient) {


  }


  getBooks() {
    let params = new HttpParams;

    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.isbns.join(',')}&format=json`)
    // params: params;


  }
}
