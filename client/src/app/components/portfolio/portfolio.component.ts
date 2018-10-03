import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { Portfolio, Currency, Fund } from '../../model/model';
import { AuthService } from '../../services/auth.service';
import { FundService } from '../../services/fund.service';
import { CurrencyService } from '../../services/currency.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { InteractionService } from '../../services/interaction.service';

declare const $;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  private portfolio: Portfolio;
  private selectedCurrency: Currency;
  private funds: Fund[];
  private assets: number;
  private isSell: Boolean;
  private sellFund: Fund;
  private openOnLoad: string;
  private currencyMap: { string?: Currency };

  constructor(
    private portfolioService: PortfolioService,
    private fundService: FundService,
    private currencyService: CurrencyService,
    private authService: AuthService,
    private interactionService: InteractionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.assets = 0;
    this.openOnLoad = localStorage.getItem('openBuyModal');
    localStorage.removeItem('openBuyModal');
    this.loadPortfolio();
  }

  loadPortfolio() {
    this.interactionService.showLoader(true);
    this.portfolioService.getPortfolio()
      .subscribe((portfolio) => {
        this.portfolio = portfolio;
        // get funds
        this.fundService.getFunds(this.portfolio)
          .subscribe((funds) => {
            this.funds = funds;
            this.assets = 0.00;

            // get currency
            this.currencyService.getCurrency()
              .subscribe((currency) => {
                this.currencyMap = currency;
                this.funds.forEach((i) => {
                  this.assets += i.quantity * currency[i.name].value;
                });

                this.interactionService.showLoader(false);

                if (this.openOnLoad && currency[this.openOnLoad]) {
                  this.showBuyModal(currency[this.openOnLoad]);
                }

              }, (err) => {
                console.log('Error getting currency info', err);
              });


          });
      });
  }

  showBuyModal(currency) {
    this.selectedCurrency = currency;
    this.isSell = false;
    this.sellFund = null;
    $('#buySellFundModal').modal('show');
  }

  showSellModal(sell) {
    this.selectedCurrency = sell.currency;
    this.isSell = true;
    this.sellFund = sell.fund;
    $('#buySellFundModal').modal('show');
  }

  closeBuyModal(result) {
    $('#buySellFundModal').modal('hide');
    if (result) {
      this.loadPortfolio();
    }
  }

}
