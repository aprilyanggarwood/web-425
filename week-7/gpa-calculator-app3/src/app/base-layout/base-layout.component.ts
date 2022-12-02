/*
Title: base-layout.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/02/2022
 Description: Exercise 7.2 - Reactive Forms
Resources: Material Design https://material.io
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor( private cookieService: CookieService, private router: Router) {
    this.assignment = 'Exercise 7.2 - Reactive Forms';
  }

  ngOnInit(): void {
  }

  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
