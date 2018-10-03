import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundBuySellComponent } from './fund-buy-sell.component';

describe('BuyComponent', () => {
  let component: FundBuySellComponent;
  let fixture: ComponentFixture<FundBuySellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FundBuySellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundBuySellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
