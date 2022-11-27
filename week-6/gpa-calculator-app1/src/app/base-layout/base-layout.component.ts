/*
Title: base-layout.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/26/2022
 Description: Assignment 6.3 - Layouts
Resources: Material Design https://material.io
*/



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 6.3 - Layouts';
  }

  ngOnInit(): void {
  }

}
