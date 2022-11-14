/*
 Title: about.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/10/2022
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection - About component ( About view)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
