/*
 Title: book.interface.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/26/2022
 Description: Assignment 6.2 - Output Properties
Resources: Material Design https://material.io
*/

export interface IBook{
  isbn: string;
  title: string;
  description: string,
  numOfPages: number;
  authors: Array<string>;
}
