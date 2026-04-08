import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInputOutput } from '../component-input-output/component-input-output';
import { LifeCycleHook } from '../life-cycle-hook/life-cycle-hook';
import { Content_Child } from '../content-child/content-child';
import { delay, interval, map, Observable, of } from 'rxjs';
import { StarPipe } from "../app";

@Component({
  selector: 'app-home',
  imports: [CommonModule, ComponentInputOutput, LifeCycleHook, Content_Child, StarPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // =========================== Angular Component Essentials Input(), Output() ========================================= 
  // ================= Listen for the 'newItemEvent' from the child and run the 'addItem' method =========
  parentMsg = "Hello child Angular.";
  items: string[] = ['item1', 'item2'];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  //=======================================================================================================

  // ================= Code for LifeCycle hook example =======================================================
  //name: string;
  showUserDetails: boolean;
  btnText: string;

  constructor() {
    this.showUserDetails = false;
    this.btnText = 'Show';
  }
  toggleUserDetails() {
    this.showUserDetails = !this.showUserDetails;
    this.btnText = this.showUserDetails ? 'Hide' : 'Show';
  }
  //=======================================================================================

  // ============================== @ViewChildren - Accessing Multiple DOM Elements =================================
  // Query for all elements with #box
  @ViewChildren('box') boxes!: QueryList<ElementRef>;

  ngAfterViewInit() {
    // QueryList is initialized after ngAfterViewInit
    console.log(this.boxes.length); // Outputs: 3
  }
  changeColors() {
    // Iterate through the QueryList
    this.boxes.forEach((box, index) => {
      box.nativeElement.style.backgroundColor = index % 2 === 0 ? 'lightblue' : 'lightgreen';
    });
  }
  //=======================================================================================

  // ============================== Pipes =====================================================================
  title = 'Angular';
  price = 1234.5;
  today = new Date();
  percent = 0.3495;

  // Async pipe --------
  data$!: Observable<string[]>;

  ngOnInit(): void {
    // Simulate fetching data
    this.data$ = of(['Item 1', 'Item 2', 'Item 3']);
  }

  time$ = interval(1000).pipe(map(() => new Date()));
  users$ = of([{ name: 'Alice' }, { name: 'Bob' }, { name: 'Carol' }]).pipe(delay(1000));
  //=======================================================================================

}
