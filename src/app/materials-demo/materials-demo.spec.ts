import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsDemo } from './materials-demo';

describe('MaterialsDemo', () => {
  let component: MaterialsDemo;
  let fixture: ComponentFixture<MaterialsDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialsDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(MaterialsDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
