import { Component, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-lazy-loading',
  imports: [],
  templateUrl: './dynamic-lazy-loading.html',
  styleUrl: './dynamic-lazy-loading.css',
})
export class DynamicLazyLoading {
  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;
  componentRef!: ComponentRef<any>;

  constructor() { }

  receivedData: string = '';

  async loadGreetComponent() 
  {
    // Clear the container before adding a new component
    this.container.clear();

    // Dynamically import the component file
    const { Greet } = await import('../greet/greet'); //./greet/greet.component

    // Create the component and insert it into the container
    this.componentRef = this.container.createComponent(Greet);

    // Optional: Pass data to the dynamically loaded component (if it has @Input properties)
    this.componentRef.instance.MessageFromParent = "Hello from the parent component!";

     //Subscribe to the output event from the child instance
    this.componentRef.instance.dataEmitter.subscribe((data: string) => 
    {
      this.receivedData = data; // Handle the data in the parent component
    });
  }
}
