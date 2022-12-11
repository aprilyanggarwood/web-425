/*
 Title: book.interface.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
Description: Assignment 8.2 – Server-side Communications
Resources: Material Design https://material.io
*/

export interface IBook{
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
