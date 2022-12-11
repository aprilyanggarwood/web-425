/*
 Title: app.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/11/2022
Description: Assignment 8.2 – Server-side Communications
 Resources: Material Design https://material.io
*/


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = "Welcome to In-N-Out-Books"
  }
}
