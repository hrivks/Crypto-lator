import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { Fund, Currency, Portfolio } from '../../../model/model';
import { FundService } from '../../../services/fund.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';

@Component({
  selector: 'app-fund-buy-sell',
  templateUrl: './fund-buy-sell.component.html',
  styleUrls: ['./fund-buy-sell.component.css']
})
export class FundBuySellComponent implements OnInit, OnChanges {

  @Input() currency: Currency;
  @Output() onComplete: EventEmitter<Fund> = new EventEmitter();
  @Input() portfolio: Portfolio;
  @Input() isSell: Boolean;
  @Input() sellFund: Fund;

  private amount: number;
  private quantity: number;
  private error: String = '';
  private requestInProgress: Boolean = false;
  private buyConfirmation: Boolean = false;
  private willHaveAmount: number;

  constructor(private fundService: FundService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.buyConfirmation = false;
    if (this.currency) {
      if (this.isSell) {
        this.quantity = this.sellFund.quantity;
      } else {
        this.quantity = 1;
      }
      this.amount = parseFloat(this.currency.value.toFixed(2));
      this.checkFundSufficient();
    }
  }

  amountChanged() {
    this.checkFundSufficient();
    this.quantity = parseFloat((this.amount / this.currency.value).toFixed(2));
  }

  quantityChanged() {
    this.checkFundSufficient();
    this.amount = parseFloat((this.currency.value * this.quantity).toFixed(2));
  }

  cancel() {
    this.onComplete.emit(null);
  }

  checkFundSufficient() {

    if (this.isSell) {
      this.willHaveAmount = this.portfolio.amount + this.amount;
    } else {
      this.willHaveAmount = this.portfolio.amount - this.amount;
    }

    this.error = '';
    if (!this.isSell && this.amount > this.portfolio.amount) {
      this.error = 'Insufficient funds';
      return false;
    } else if (this.quantity <= 0) {
      this.error = 'Quantity must be above 0';
      return false;
    } else if (this.amount < 0) {
      this.error = 'Amount cannot be less than $0';
      return false;
    }

    if (this.isSell) {
      if (this.quantity > this.sellFund.quantity) {
        this.error = 'You cannot sell more than what you have';
        return false;
      }
    }

    return true;
  }

  buyFund() {
    if (this.requestInProgress) {
      return;
    }

    this.error = '';
    if (!this.checkFundSufficient()) {
      return;
    }

    this.requestInProgress = true;
    const fund = {
      name: this.currency.id,
      quantity: this.quantity
    };

    if (this.isSell) {
      fund.quantity = - fund.quantity;
    }

    this.fundService.updateFund(this.portfolio, fund)
      .subscribe((result) => {
        this.onComplete.emit(result);
        this.requestInProgress = false;
      }, (err) => {
        this.requestInProgress = false;
        this.errorHandler.handleError('Error buying fund', err);
      });
  }

}
