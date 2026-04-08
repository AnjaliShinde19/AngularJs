import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyTickets } from './buy-tickets';

describe('BuyTickets', () => {
  let component: BuyTickets;
  let fixture: ComponentFixture<BuyTickets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyTickets],
    }).compileComponents();

    fixture = TestBed.createComponent(BuyTickets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
