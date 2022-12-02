/*
Title: gpa.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/02/2022
 Description: Exercise 7.2 - Reactive Forms
Resources: Material Design https://material.io
*/


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal!: number;


  constructor() { }

  ngOnInit(): void {
  }

}
