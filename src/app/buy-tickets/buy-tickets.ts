import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonPipe,CommonModule } from '@angular/common';

@Component({
  selector: 'app-buy-tickets',
  imports: [ReactiveFormsModule,JsonPipe,CommonModule],
  templateUrl: './buy-tickets.html',
  styleUrl: './buy-tickets.css',
})
export class BuyTickets {
  buyTicketForm!: FormGroup;

  constructor(private fb: FormBuilder) { } // Inject FormBuilder

  ngOnInit() {
    this.buyTicketForm = this.fb.group({
      event: ['', Validators.required],
      tickets: this.fb.array([], Validators.required) // Initialize an empty FormArray
    });
  }

  // Getter to easily access the 'tickets' FormArray in the template
  get tickets() {
    return this.buyTicketForm.get('tickets') as FormArray;
  }

  // Function to create a new "ticket" FormGroup
  createTicket(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]]
    });
  }

  // Method to dynamically add a new ticket group
  addTicket() {
    this.tickets.push(this.createTicket());
  }

  // Method to dynamically remove a ticket group by index
  removeTicket(index: number) {
    this.tickets.removeAt(index);
  }

  onSubmit() {
    if (this.buyTicketForm.valid) {
      console.log('Form Submitted:', this.buyTicketForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
