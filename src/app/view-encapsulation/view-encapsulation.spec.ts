import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View_Encapsulation } from './view-encapsulation';

describe('ViewEncapsulation', () => {
  let component: View_Encapsulation;
  let fixture: ComponentFixture<View_Encapsulation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [View_Encapsulation],
    }).compileComponents();

    fixture = TestBed.createComponent(View_Encapsulation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
