import { Component, Pipe, PipeTransform, signal } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { View_Encapsulation } from "./view-encapsulation/view-encapsulation";
import { ViewEncapsulation1 } from "./view-encapsulation1/view-encapsulation1"; // Import CommonModule

// ================= Pipes =======================================================
@Pipe({
  name: 'star' // Used in HTML
  //, pure: false //Its a impure pipe which gets execute on change detection cycle (e.g, on every keypress).
})
export class StarPipe implements PipeTransform {
  transform(value: string): string {
    return `⭐️ ${value} ⭐️`;
  }
}
//=======================================================================================

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterModule, CommonModule, View_Encapsulation, ViewEncapsulation1], // Needed for routing
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SampleApp_Angular21');
}
