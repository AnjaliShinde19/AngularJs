import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ValidateUrl } from './ValidateUrl.validator'; // Synchronous Custom Validator
import { matchPasswordValidator } from './matchPasswordValidator'; // Import the custom validator
import { UniqueUsernameService } from './unique-username.service'; // Asynchronous Custom Validator

@Component({
  selector: 'app-reactive-form-demo',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form-demo.html',
  styleUrl: './reactive-form-demo.css',
})
export class ReactiveFormDemo {

  // constructor(private uniqueUsername: UniqueUsernameService) { }
  private uniqueUsername = inject(UniqueUsernameService); // Inject the service

  form = new FormGroup({
    fullname: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]
      , [this.uniqueUsername.uniqueUsernameValidator()]
    ), // Asynchronous validator

    email: new FormControl('', [Validators.required, Validators.email]),

    WebsiteURL: new FormControl('', [Validators.required, ValidateUrl]), // Synchronous validator

    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  },
    {
      // Apply the custom validator to the form group
      validators: [matchPasswordValidator('password', 'confirmPassword')]
    }
  );

  get f() { return this.form.controls; } // Getter to easily access controls in the template

  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    console.warn('Form Submitted:', this.form.value);
  }
}
