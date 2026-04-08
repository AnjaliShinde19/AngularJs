import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RandomIdGenerator } from '../random-id-generator/random-id-generator'; 

@Component({
  selector: 'app-life-cycle-hook',
  imports: [RandomIdGenerator,FormsModule],
  templateUrl: './life-cycle-hook.html',
  styleUrl: './life-cycle-hook.css',
})
export class LifeCycleHook {

  name: string = "Angular";
  prefix: string = "";
  userid: string = "";

  onGenerateUserId(uid: string) {
    console.log("Generating UserID");
    this.userid = uid;
  }

  constructor() {
    this.name = "";
    console.log("Parent constructor() called");
  }
  ngOnInit() {
    this.name = "John Doe";
    console.log("Parent ngOnInit() called");
  }
  ngOnChanges() {
    console.log("Parent ngOnChanges() called");
  }
  ngDoCheck() {
    console.log("Parent ngDoCheck() called");
  }

  //-- START -----------------------------------------------------------------------------------------------
  @ViewChild(RandomIdGenerator) childComponent!: RandomIdGenerator;

  incrementCounter() {
    this.childComponent.counter++;
  }
  ngAfterViewChecked() {
    console.log("Parent ngAfterViewChecked() called");

    // This runs after every change detection cycle
    if (this.childComponent) {
      this.childComponent.counterState = "Prevoius State : " + this.childComponent.counter.toString() + " ==> ngAfterViewChecked triggered.";
    }
  }

  ngAfterViewInit() {
    console.log("Parent ngAfterViewInit() called");
  }
  //-- END -----------------------------------------------------------------------------------------------

  //-- START -----------------------------------------------------------------------------------------------
  ngAfterContentInit() {
    console.log("Parent ngAfterContentInit() called");
  }
  ngAfterContentChecked() {
    console.log("Parent ngAfterContentChecked() called");
  }

  // with ngAfterViewInit is generally safer.
  @ViewChild('h2TitleTag') pRef!: ElementRef;

  // Example function to trigger change detection
  updateTitle() {
    // this might update an input property, which in turn causes change detection to run.
    this.pRef.nativeElement.textContent = "Button clicked, change detection cycle triggered.";

    // You can also directly manipulate the element, though this is generally discouraged in Angular
    this.pRef.nativeElement.style.color = 'blue';
  }
  //-- END -----------------------------------------------------------------------------------------------

  ngOnDestroy() {
    console.log("Parent ngOnDestroy() called");
  }

}
