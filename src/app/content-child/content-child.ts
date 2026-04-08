import { Component, ElementRef,ContentChild  } from '@angular/core';

@Component({
  selector: 'app-content-child',
  imports: [],
  templateUrl: './content-child.html',
  styleUrl: './content-child.css',
})
export class Content_Child {
  // @ContentChild - accesses content projected from a parent component into a child component via <ng-content> 
  // Query for element with #msg in parent
  @ContentChild('msg') message!: ElementRef;

  ngAfterContentInit() {
    // Access native element after content is projected
    console.log(this.message.nativeElement.textContent);
    this.message.nativeElement.style.color = 'blue';
  }
}
