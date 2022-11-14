/*
 Title: contact.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 11/10/2022
 Description: Excercise 4.2 - Inversion of Control and Dependency Injection- Contact component ( Contact view)
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
