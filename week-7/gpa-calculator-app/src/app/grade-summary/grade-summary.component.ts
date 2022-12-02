/*
Title: grade-summary.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/26/2022
 Description: Assignment 6.4 - Input Properties
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
