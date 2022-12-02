/*
Title: grade-summary.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/02/2022
 Description: Exercise 7.2 - Reactive Forms
Resources: Material Design https://material.io
*/



import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})

export class GradeSummaryComponent implements OnInit {
  @Input() grade!: string;
  @Input() course!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
