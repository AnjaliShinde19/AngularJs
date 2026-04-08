import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  imports: [],
  templateUrl: './greet.html',
  styleUrl: './greet.css',
})
export class Greet {
  @Input() MessageFromParent!: string;

  @Output() dataEmitter = new EventEmitter<string>(); // The event to emit

  sendDataToParent(): void {
    const dataToSend = 'Hello from dynamic child!';
    this.dataEmitter.emit(dataToSend); // Emit the data
  }
}
