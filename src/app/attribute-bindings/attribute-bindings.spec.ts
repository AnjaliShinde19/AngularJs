import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeBindings } from './attribute-bindings';

describe('AttributeBindings', () => {
  let component: AttributeBindings;
  let fixture: ComponentFixture<AttributeBindings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttributeBindings],
    }).compileComponents();

    fixture = TestBed.createComponent(AttributeBindings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
