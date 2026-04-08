import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-change-detection-stretegies',
  imports: [FormsModule],
  templateUrl: './change-detection-stretegies.html',
  styleUrl: './change-detection-stretegies.css',
  // changeDetection: ChangeDetectionStrategy.Eager
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionStretegies {

  // @Input() inputMsg: string = "This is default message.";
  // textChanged() {
  //   // Manually triggering change detection
  //   this.cdRef.markForCheck();
  // }

  // ChangeDetectionStrategy - onPush
  @Input() name!: string;
  constructor(private cdRef: ChangeDetectorRef) { }

  changeName() {
    this.name = 'Updated Name';

    // Manually triggering change detection
    this.cdRef.markForCheck();
  }

  // ChangeDetectionStrategy - default(Eager)
  title = 'Real-time Dashboard';
  changeTitle() {
    this.title = 'Updated Dashboard';
  }
}
