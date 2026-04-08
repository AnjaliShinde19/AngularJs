import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicLazyLoading } from './dynamic-lazy-loading';

describe('DynamicLazyLoading', () => {
  let component: DynamicLazyLoading;
  let fixture: ComponentFixture<DynamicLazyLoading>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicLazyLoading],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicLazyLoading);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
