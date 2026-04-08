import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChild } from './content-child';

describe('ContentChild', () => {
  let component: ContentChild;
  let fixture: ComponentFixture<ContentChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentChild],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
