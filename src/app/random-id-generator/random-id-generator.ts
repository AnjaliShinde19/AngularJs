import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-random-id-generator',
  imports: [],
  template: `
    <div>
      <input type='button' (click)='random()' value='Generate UserID' />
      <br/>

      <ng-content></ng-content> <!-- Projected content goes here -->

      <p>{{this.titleElementRef.nativeElement.textContent}} </p>
      <p>Child Counter: {{ counter }}</p>
      <p>{{counterState}}</p>
    </div>`
})
export class RandomIdGenerator {
  @Input() user: string;
  @Output() generateUserId: EventEmitter<string> = new EventEmitter<string>();

  random() {
    var t = new Date().getTime();
    this.generateUserId.emit(this.user + t.toString());
    console.log('random() called');
  }

  constructor() {
    this.user = '';
    console.log('Child constructor() called');
  }
  ngOnInit() {
    console.log('Child ngOnInit() called');
  }
  ngOnChanges() {
    console.log('Child ngOnChanges() called');
  }
  ngDoCheck() {
    console.log('Child ngDoCheck() called');
  }

  //-- START -------------------------------------------------------------------------------------------------------------
  counter = 0;
  counterState = "";
  ngAfterViewChecked() {
    console.log('Child ngAfterViewChecked() called');
  }
  ngAfterViewInit() {
    console.log('Child ngAfterViewInit() called');
  }
  //--END -------------------------------------------------------------------------------------------------------------

  //-- START -------------------------------------------------------------------------------------------------------------
  // ----------- Selects the element with a local reference #title from the projected content --------------------
  ngAfterContentInit() {
    console.log('Child ngAfterContentInit() called');
  }

  @ContentChild('h2TitleTag') titleElementRef!: ElementRef;
  ngAfterContentChecked() {
    console.log('Child ngAfterContentChecked() called');

    if (this.titleElementRef) {
      // This is the ideal place to interact with the projected DOM
      console.log('Projected title text content:', this.titleElementRef.nativeElement.textContent);

      // Example: perform some logic based on the content
      if (this.titleElementRef.nativeElement.textContent.length > 20) {
        console.log('Title is long, consider adjusting layout.');
      }
    }
  }
  //---- END -------------------------------------------------------------------------------------------------------------

  ngOnDestroy() {
    console.log('Child ngOnDestroy() called');
  }

}
