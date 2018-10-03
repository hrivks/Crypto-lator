import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../model/model';
import { FilterCurrencyPipe } from '../pipes/filter-currency.pipe';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Output() onSelect: EventEmitter<Currency> = new EventEmitter<Currency>();

  constructor(private currencyService: CurrencyService) {
  }
  objectKeys = Object.keys;
  private currency: Currency[];

  ngOnInit() {
    this.currencyService.getCurrency()
      .subscribe((result) => {
        this.currency = Object.values(result);
      }, (err) => {
        console.log('Error retrieving currency values', err);
      });
  }

  onCurrencySelect(selectedCurrency: Currency) {
    console.log(selectedCurrency);
    this.onSelect.emit(selectedCurrency);
  }

}
