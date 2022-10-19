/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * Modified By: April Yang
 * Date: 10/18/2022
 * Description: Exercise 1.3 - Hello World component
 */


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myWorld = "You are now in April's world!"

}
