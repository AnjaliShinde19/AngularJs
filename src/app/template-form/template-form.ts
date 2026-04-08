import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CanComponentDeactivate } from '../Guard/can-component-deactivate';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm implements CanComponentDeactivate {

  isDirty = true; // Represents unsaved changes
  canDeactivate(): boolean {
    if (this.isDirty) {
      return confirm('You have unsaved changes! Are you sure you want to leave?');
    }
    return true;
  }

  // Model for the form data
  user =
    {
      username: '',
      email: '',
      Address: '',
      agree: '',
      color: '',
      pet: '',
      fileUpload: ''
    };

  // Method to handle form submission
  onSubmit(form: NgForm): void {
    if (form.valid) {
      console.log('Form Submitted!', this.user);
      // You can add logic to send data to a backend service here
    }
    else {
      console.log('Form is invalid');
    }
  }
}
