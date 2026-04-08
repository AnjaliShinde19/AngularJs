import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleHook } from './life-cycle-hook';

describe('LifeCycleHook', () => {
  let component: LifeCycleHook;
  let fixture: ComponentFixture<LifeCycleHook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleHook],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCycleHook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
