import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEncapsulation1 } from './view-encapsulation1';

describe('ViewEncapsulation1', () => {
  let component: ViewEncapsulation1;
  let fixture: ComponentFixture<ViewEncapsulation1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewEncapsulation1],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewEncapsulation1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
