import { Component } from '@angular/core';
import { RouterOutlet,RouterModule  } from "@angular/router";

@Component({
  selector: 'app-nested-child-demo',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './nested-child-demo.html',
  styleUrl: './nested-child-demo.css',
})
export class NestedChildDemo {}
