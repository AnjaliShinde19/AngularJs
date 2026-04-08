import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInputOutput } from './component-input-output';

describe('ComponentInputOutput', () => {
  let component: ComponentInputOutput;
  let fixture: ComponentFixture<ComponentInputOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentInputOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInputOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
