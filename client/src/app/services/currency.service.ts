import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User, Currency } from '../model/model';
import { AppConstants } from '../app.constants';

@Injectable()
export class CurrencyService {

    endpoint = {
        'getCurrency': 'https://api.coinmarketcap.com/v1/ticker/'
    };

    // local cache
    currency: { string?: Currency } = {};

    constructor(private http: HttpClient) {
    }

    getCurrency() {
        const obs = new Observable<{ string?: Currency }>((observer) => {

            // check if data is availabe in local storage
            let cached: any = localStorage.getItem('cachedCurrency');
            if (cached) {
                cached = JSON.parse(cached);
                cached.setAt = new Date(cached.setAt);
                const now: any = new Date();
                if (now - cached.setAt > 1000 * 60 * 5) {
                    localStorage.removeItem('cachedCurrency');
                } else {
                    console.log('currency data loaded from cache');
                    this.currency = cached.currency;
                }
            }

            if (Object.values(this.currency).length > 0) {
                observer.next(this.currency);
                observer.complete();
            } else {
                this.http.get(this.endpoint.getCurrency)
                    .subscribe((result: any) => {
                        result.forEach((i) => {
                            this.currency[i.id] = {
                                id: i.id,
                                name: i.name,
                                symbol: i.symbol,
                                value: parseFloat(i.price_usd),
                                rank: parseInt(i.rank, 10)
                            };
                        });
                        localStorage.setItem('cachedCurrency', JSON.stringify({
                            setAt: new Date(),
                            currency: this.currency
                        }));
                        observer.next(this.currency);
                        observer.complete();
                    }, (err) => {
                        observer.error(err);
                    });
            }
        });

        return obs;
    }
}
