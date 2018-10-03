import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Fund, Currency } from '../../../model/model';
import { FundService } from '../../../services/fund.service';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-fund-list',
  templateUrl: './fund-list.component.html',
  styleUrls: ['./fund-list.component.css']
})
export class FundListComponent implements OnInit {

  @Input() funds: Fund[];
  @Output() onBuyClick: EventEmitter<Fund> = new EventEmitter();
  @Output() onSellClick: EventEmitter<{ fund: Fund, currency: Currency }> = new EventEmitter();
  @Input() currencyMap: { string?: Currency };

  constructor(private fundService: FundService,
    private currencyService: CurrencyService) {
  }

  ngOnInit() {
    // this.currencyService.getCurrency()
    //   .subscribe((currency) => {
    //     this.currencyMap = currency;
    //   });
  }

  buyClick(fund) {
    this.onBuyClick.emit(this.currencyMap[fund.name]);
  }

  sellClick(fund) {
    this.onSellClick.emit({ currency: this.currencyMap[fund.name], fund: fund });
  }

}
