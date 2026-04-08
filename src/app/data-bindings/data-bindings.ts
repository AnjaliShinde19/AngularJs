import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-bindings',
  imports: [CommonModule,FormsModule],
  templateUrl: './data-bindings.html',
  styleUrl: './data-bindings.css',
})
export class DataBindings {
  constructor() { }
  ngOnInit(): void { }

  // Interpolation {{}}, [propertyBinding], (EventBinding) Example 
  name = 'Angular';
  count = 0;
  isDisabled = true;

  // Two-way Binding (ngModel)
  nametxt = 'Angular';
  favorite = 'Angular';

  // Attribute Binding
  span = 1;
  TableTitle = 'Data table';
}
