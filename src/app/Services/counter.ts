import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  value = 0;

  inc() { this.value++; }
  dec() { this.value--; }
  reset() { this.value = 0; }
}
