import { Component, inject } from '@angular/core';
import { LoggerService } from '../Services/logger';
import { CounterService } from '../Services/counter';

// ----------------------------------- counter A ----------------------------------------
@Component({
  selector: 'counter-a',
  providers: [CounterService], // New instance for component - Component-Provided Service (Hierarchical DI)
  template: `
    <h4>Counter A</h4>
    <p>Value: {{ counter.value }}</p>
    <button (click)="counter.inc()">+1</button>
    <button (click)="counter.dec()">-1</button>
  `
})
export class CounterA {
  //  constructor(public counter: CounterService) { }
  public counter = inject(CounterService) as CounterService;
}

// ----------------------------------- counter B ----------------------------------------
@Component({
  selector: 'counter-b',
  // providers: [CounterService], // New instance for component- Component-Provided Service (Hierarchical DI)
  template: `
    <h4>Counter B</h4>
    <p>Value: {{ counter.value }}</p>
    <button (click)="counter.inc()">+1</button>
    <button (click)="counter.dec()">-1</button>
  `
})
export class CounterB {
  // constructor(public counter: CounterService) { }
  public counter = inject(CounterService) as CounterService;
}

// ----------------------------------- MAin component ----------------------------------------
@Component({
  selector: 'app-logger',
  imports: [CounterA,CounterB],
  templateUrl: './logger.html',
  styleUrl: './logger.css',
})
export class Logger {
  public counterSrc = inject(CounterService) as CounterService;

  // Inject the LoggerService through the constructor
  constructor(private logger: LoggerService) {
    this.logger.log('AppComponent initialized'); // Use the service's method
    // this.logger.error('Sample error message.');
  }
}
