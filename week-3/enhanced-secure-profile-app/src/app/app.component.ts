/*
   Title: app.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/03/2022
 Description: App component
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  assignment: string = 'Exercise 2.3 - Data Binding';
}
