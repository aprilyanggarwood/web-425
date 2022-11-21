/*
 Title: book.interface.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/20/2022
 Description: Assignment 5.3 - Data Tables
Resources: Material Design https://material.io
*/

export interface IBook{
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
