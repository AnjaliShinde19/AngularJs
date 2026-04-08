import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStretegies } from './change-detection-stretegies';

describe('ChangeDetectionStretegies', () => {
  let component: ChangeDetectionStretegies;
  let fixture: ComponentFixture<ChangeDetectionStretegies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionStretegies],
    }).compileComponents();

    fixture = TestBed.createComponent(ChangeDetectionStretegies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
