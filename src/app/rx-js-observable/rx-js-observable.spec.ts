import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsObservable } from './rx-js-observable';

describe('RxJsObservable', () => {
  let component: RxJsObservable;
  let fixture: ComponentFixture<RxJsObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsObservable],
    }).compileComponents();

    fixture = TestBed.createComponent(RxJsObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
