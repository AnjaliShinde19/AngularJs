// Structural directives = ngIf, ngFor, ngSwitch -->
// @Directive, Attribute Directive (hover highlight), @HostBinding and @HostListener -->

import { Component, OnInit, Directive, Input, HostBinding, HostListener } from '@angular/core';
import { SampleDataService } from '../sample-data-service';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Directive({
  selector: '[HighlightDiv]'
})
export class HighlightDirective {
  @Input('HighlightDiv') highlightColor = '';

  @HostBinding('style.transition') transition = 'background-color 150ms ease-in-out';
  @HostBinding('style.backgroundColor') bg = '';

  @HostListener('mouseenter') onEnter() { this.bg = this.highlightColor; }
  @HostListener('mouseleave') onLeave() { this.bg = ''; }
}

@Component({
  selector: 'app-directives',
  imports: [CommonModule,HighlightDirective],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {

  // ========================== @Directive, Attribute Directive (hover highlight), @HostBinding and @HostListener ==============
  color = 'red';
  enabled = true;
  toggle() { this.enabled = !this.enabled; }

  //======================= Basic Directives. *ngIf, *ngFor =================================
  show = true;
  get items() { return this.show ? ['Angular', 'Components', 'Directives'] : []; }
  toggleBasicDirective() { this.show = !this.show; }

  // ====================================== ngIf with else =================================
  loggedIn = false;
  user = 'Angular User';
  hasAccess = true;

  // ======================================= switch case ===============================
  status = 'loading';

  // ======================================= Loop ===============================
  loopItems = ['Angular', 'React', 'Vue'];
  add() { this.loopItems = [...this.loopItems, 'Svelte']; }

  // ============================= class exercise = Mini App: User Panel ======================================
  dataItems: { id: number, name: string }[] = [];

  // Inject the SampleDataService in the constructor
  constructor(private dataService: SampleDataService) {
    console.log("I am from constructor.");
  }

  ngOnInit() {
    console.log("I am from ngOnInit.");
    // Call the service method to get data when the component initializes
    this.dataItems = this.dataService.getDataList();
  }

}
