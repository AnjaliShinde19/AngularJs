import { Component, ElementRef, ViewChild } from '@angular/core';
import { AsyncSubject, BehaviorSubject, filter, from, fromEvent, interval, map, mergeMap, Observable, of, ReplaySubject, Subject, Subscription, switchMap, tap, throwError, timer } from 'rxjs';
import { CommonModule } from '@angular/common';
import { myObservable$ } from './RxJsObservable_Methods';

@Component({
  selector: 'app-rx-js-observable',
  imports: [CommonModule],
  templateUrl: './rx-js-observable.html',
  styleUrl: './rx-js-observable.css',
})
export class RxJsObservable {


  // ======================================== Using an Observable in a Component =========================================
  // To receive the values emitted by an Observable, you must subscribe to it. 
  private subscription: Subscription | undefined; // Good practice to manage subscriptions

  // 1. Initialize BehaviorSubject with initial value
  private PostItems = new BehaviorSubject<string[]>([]);

  // 2. Expose as Observable for components
  public posts$: Observable<string[]> = this.PostItems.asObservable();
  // ==================================================================================================================

  // ================================== Ways to create observables using RxJS methods =====================================
  items: number[] = [];

  fromItems: number[] = [];
  promiseItems!: string;

  intervalValue!: string;
  // Observable that emits an incrementing number every second
  public counter$!: Observable<number>;

  // Timer Starts after 3 seconds, emits every 1 second
  public timerCounter$!: Observable<number>;
  public errorMsg!: string;
  // =======================================================================================================================

  mappedData: number[] = [];
  transformed$!: Observable<number>;

  // ------------------  -------------------


  ngOnInit() {

    // ======================================== RXJS Operators ============================================
    // 1. Define a source observable
    const source$ = of(1, 2, 3, 4, 5);

    // 2. Use .pipe() and map() to transform the data
    source$.pipe(
      filter(num => num % 2 === 0),
      map(val => val * 10) // Multiplies each emitted value by 10
    ).subscribe(res => {
      this.mappedData.push(res);
    });

    // ------------------------- switch map ------------------------------


    // =======================================================================================================================

    // ======================================== Subjects ============================================
    const mysubject = new Subject();
    mysubject.next('event 0');
    mysubject.subscribe(event => console.log('Event : ' + event));

    mysubject.next('event 1');
    mysubject.next('event 2');
    mysubject.next('event 3');
    // =============================================================================================================

    // ================================== BehaviorSubjects =========================================
    const subject = new BehaviorSubject<number>(0);

    // subscriber 1
    subject.subscribe((data) => { console.log('Subscriber A:', data); });
    subject.next(Math.random());
    subject.next(Math.random());

    // subscriber 2
    subject.subscribe((data) => { console.log('Subscriber B:', data); });
    subject.next(Math.random());
    console.log(subject.value + "\n");
    // =============================================================================================================

    // ================================================= ReplaySubjects =============================================
    const replysubject = new ReplaySubject(2, 1000);

    // subscriber 1
    replysubject.subscribe((data) => { console.log('Subscriber A:', data); });

    replysubject.next(Math.random())
    replysubject.next(Math.random())
    replysubject.next(Math.random())

    // subscriber 2
    replysubject.subscribe((data) => { console.log('Subscriber B:', data); });
    replysubject.next(Math.random());
    // =============================================================================================================

    // ================================================= AsyncSubjects =============================================
    const asynsubject = new AsyncSubject();

    // subscriber 1
    asynsubject.subscribe((data) => { console.log('\n -- Subscriber A:', data); });
    asynsubject.next(Math.random());
    asynsubject.next(Math.random());
    asynsubject.next(Math.random());

    // subscriber 2
    asynsubject.subscribe((data) => { console.log('Subscriber B:', data); });
    asynsubject.next(Math.random());
    asynsubject.complete();
    // =============================================================================================================

    // ----------------------- 1. of() ----------------------
    const numbers$ = of(1, 2, 3);
    numbers$.subscribe({
      next: (value) => {
        this.items.push(value);
      },
      complete: () => { },
    });

    // ----------------------- 2. from() ----------------------
    const array$ = from([10, 20, 30]);
    array$.subscribe({
      next: (value) => { this.fromItems.push(value); },
      complete: () => { }
    });

    // Example with Promise:-
    const promise$ = from(Promise.resolve('Hello from Promise'));
    promise$.subscribe({
      next: (value) => { this.promiseItems = value; },
      complete: () => { }
    });

    // ------------------------- 3. interval() ------------------------------
    this.counter$ = interval(1000);
    // const interval$ = interval(1000);
    // interval$.subscribe((value) => {
    //   this.intervalValue = 'Second:' + value;
    //   // console.log(console.log('Second:', value));
    // });

    // ------------------------- 4. timer() ------------------------------
    this.timerCounter$ = timer(2000, 1000);
    //const timer$ = timer(2000,1000);  // Starts after 2 seconds
    //timer$.subscribe(value => {console.log('Timer fired:', value)});

    // ----------------------- 6. throwError() ----------------------
    const error$ = throwError('Something went wrong! Manually thrown error.');
    error$.subscribe({
      next: value => { },
      error: err => { this.errorMsg = err; }, //console.log(this.errorMsg); 
      complete: () => { },
    });

    // ------ custom Observable(create()) ------ Assume myObservable$ is defined as above -------------------------------------
    this.subscription = myObservable$.subscribe({
      next: (value) => {
        const currentArray = this.PostItems.value;
        const updatedArray = [...currentArray, value]; // Create a new array reference for immutability
        this.PostItems.next(updatedArray); // Emit the new array
      },
      error: (error) => console.error('An error occurred:', error),
      complete: () => { console.log('') }
    });
  }

  // Get reference to the button using @ViewChild
  @ViewChild('myButton', { static: false }) myButton!: ElementRef;
  public btnClickedMsg!: string;
  clickSubscription!: Subscription;

  // Get reference to the button using @ViewChild
  @ViewChild('btnSwitch', { static: false }) btnSwitch!: ElementRef;
  btnSwitchSubscription!: Subscription;

  ngAfterViewInit() {
    // ------------------------- 5. fromEvent() ------------------------------
    // fromEvent takes the native element and the event name ('click')
    const clicks$ = fromEvent(this.myButton.nativeElement, 'click');

    // Subscribe to the observable to start listening for events
    this.clickSubscription = clicks$.subscribe((event: unknown) => {
      this.btnClickedMsg = 'Button clicked.';
    });

    // ------------------------- swictch map() ------------------------------
    // fromEvent takes the native element and the event name ('click')
    const btnSwitchClicks$ = fromEvent(this.btnSwitch.nativeElement, 'click');

    // // Subscribe to the observable to start listening for events
    // this.btnSwitchSubscription = btnSwitchClicks$.pipe(
    //   switchMap(() => fetch('https://jsonplaceholder.typicode.com/todos/1'))
    // ).subscribe(response => console.log(response.json().then(value => (console.log(value)))));

    // ------------------------- merge map() -----------------------------
    this.btnSwitchSubscription = btnSwitchClicks$.pipe(
      mergeMap(() => fetch('https://jsonplaceholder.typicode.com/todos/1')),
      mergeMap(response => response.json())
    ).subscribe(data => console.log(data));
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks, especially for long-lived observables
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    //5. fromEvent() 
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }

    // switch map 
    if (this.btnSwitchSubscription) {
      this.btnSwitchSubscription.unsubscribe();
    }
  }
}


