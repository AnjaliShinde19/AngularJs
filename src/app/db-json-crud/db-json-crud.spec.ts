import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbJsonCrud } from './db-json-crud';

describe('DbJsonCrud', () => {
  let component: DbJsonCrud;
  let fixture: ComponentFixture<DbJsonCrud>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbJsonCrud],
    }).compileComponents();

    fixture = TestBed.createComponent(DbJsonCrud);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
