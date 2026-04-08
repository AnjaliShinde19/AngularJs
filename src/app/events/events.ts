import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  imports: [CommonModule],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  constructor() { }
  ngOnInit(): void { }

  // ================================== Click, text enter, keyup Events ==================================
  count = 0;
  value = '';
  lastKey = '';
  increment() { this.count++; }
  onInput(e: Event) { this.value = (e.target as HTMLInputElement).value; }

  // ================================== Event Filtering (keyup.enter) ==================================
  draft = '';
  lastKeyEventFilter = '';
  items = ['Buy milk', 'Learn Angular'];

  add() {
    const v = (this.draft || '').trim();
    if (!v) return;
    this.items = [...this.items, v];
    this.draft = '';
  }
  clear() { this.items = []; }

  // ================================== Debounced Input ==================================
  immediate = '';
  debounced = '';
  private handle: any;

  onDebouncedInput(e: Event) {
    const v = (e.target as HTMLInputElement)?.value ?? '';
    this.immediate = v;
    clearTimeout(this.handle);
    this.handle = setTimeout(() => this.debounced = v, 3000);
  }
}
