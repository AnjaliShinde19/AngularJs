import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpec } from './product-spec';

describe('ProductSpec', () => {
  let component: ProductSpec;
  let fixture: ComponentFixture<ProductSpec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSpec],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSpec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
