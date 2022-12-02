/*
 Title: sign-in.service.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/02/2022
 Description: Exercise 7.3 - Form Validation
 Resources: Material Design https://material.io
*/



import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>

  constructor() {
    this.studentIds = [1007, 1008, 1009, 1010, 1011, 1012]
  }

  validate(studentId: number) {
    // some() true or false
    return this.studentIds.some(id => id === studentId)
  }
}

