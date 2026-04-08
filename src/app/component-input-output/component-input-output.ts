import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component-input-output',
  imports: [],
  templateUrl: './component-input-output.html',
  styleUrl: './component-input-output.css',
})
export class ComponentInputOutput {
  constructor() { }
  ngOnInit(): void { }

  // Component Input:- 
  // Pass data from a parent to a child with @Input() and bind with [prop]:
  @Input() messageFromParent = '';

  //@Output() decorator is used with EventEmitter to pass data or events from a child component to a parent component.
  // Declare an output property that emits a string event
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    // Emit the event with the input value
    this.newItemEvent.emit(value);
  }
}
