/*
Title: sign-in.component.ts
 Author: Professor Krasso
 Modified By: April Yang
 Date: 12/02/2022
 Description: Exercise 7.3 - Form Validation
Resources: Material Design https://material.io
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm!: FormGroup;
  errorMessage!: string;

  constructor(private router: Router,
    private cookieService: CookieService,
    private fb: FormBuilder,
    private signinService: SignInService) {

   }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      // validators only allow numeric values and makes the field required
      studentId: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })


  }

  get form() {
    // return the forms controls.
    // This way we can apply client-side validation in a predictable way
    return this.signinForm.controls;
  }

  onSubmit() {
    const formValues = this.signinForm.value;
    const studentId = parseInt(formValues.studentId);

    if (this.signinService.validate(studentId)) {
      this.cookieService.set('session_user', studentId.toString(), 1)
      this.router.navigate(['/']);
    } else {
      this.errorMessage = "This Student ID you entered is Invalid, Please Try Again.";
    }


  }

}
