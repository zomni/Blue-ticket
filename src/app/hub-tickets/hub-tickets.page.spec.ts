import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HubTicketsPage } from './hub-tickets.page';

describe('HubTicketsPage', () => {
  let component: HubTicketsPage;
  let fixture: ComponentFixture<HubTicketsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HubTicketsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
