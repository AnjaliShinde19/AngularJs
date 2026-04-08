import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedChildDemo } from './nested-child-demo';

describe('NestedChildDemo', () => {
  let component: NestedChildDemo;
  let fixture: ComponentFixture<NestedChildDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedChildDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(NestedChildDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
