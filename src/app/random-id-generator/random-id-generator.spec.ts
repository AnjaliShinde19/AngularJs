import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomIdGenerator } from './random-id-generator';

describe('RandomIdGenerator', () => {
  let component: RandomIdGenerator;
  let fixture: ComponentFixture<RandomIdGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomIdGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(RandomIdGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
