/*
 Title: app.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/20/2022
 Description: Assignment 5.2 - Navigation and Layout
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
    this.assignment = "Exercise 5.2 - Navigation and Layout"
  }
}
