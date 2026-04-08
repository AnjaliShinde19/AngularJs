// 1. [attr.*], and classes/styles with [class.*]/[style.*]

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

//Method A: Using the 'paramMap' Observable (Recommended) ===============================================
import { ActivatedRoute, ParamMap } from '@angular/router'; //Subscribe to paramMap
import { switchMap } from 'rxjs/operators'; //switchMap operator to fetch data from a service
import { Observable, of } from 'rxjs'; //switchMap operator to fetch data from a service

//Method B: Using the snapshot =========================================================================
//Access Query string Parameters ('queryParams' observable,)============================================

@Component({
  selector: 'app-attribute-bindings',
  imports: [CommonModule],
  templateUrl: './attribute-bindings.html',
  styleUrl: './attribute-bindings.css',
})
export class AttributeBindings {
  //Subscribe to paramMap
  userId: string | null = null;

  // You can also use an Observable directly, 
  //userId$: Observable<string | null> | null = null; 

  //Optional query string parameter
  qsMsg: string | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    //Method A:===========================================================================================
    // Subscribe to paramMap for dynamic updates
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //     this.userId = params.get('id');
    //     console.log('User ID:', this.userId);
    // });

    // Or use the switchMap operator to fetch data from a service when the ID changes
    // this.userId$ = this.route.paramMap.pipe(
    //   switchMap(params => of(params.get('id')))
    // );

    //Method B:===========================================================================================
    this.userId = this.route.snapshot.paramMap.get('id');

    //Access Query string Parameters ('queryParams' observable,)============================================
    this.route.queryParams.subscribe(params => {
      this.qsMsg = params['qsMsg'];
    });

  }

  // [ngClass]
  isGreen: boolean = true;
  isDisabled: boolean = true;

  classesToApply = {
    'green-bg': this.isGreen,
    'disabled-text': this.isDisabled,
    'large-font': true
  };

  // [ngStyle]
  currentFontSize = 16;
  isHighlighted = true;
}
