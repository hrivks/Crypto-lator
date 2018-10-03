import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Portfolio, User } from '../model/model';
import { AppConstants } from '../app.constants';

@Injectable()
export class PortfolioService {

    endpoint = {
        'getPortfolio': AppConstants.ENDPOINT.baseUrl + '/portfolio',
        'createPortfolio': AppConstants.ENDPOINT.baseUrl + '/portfolio',
    };

    constructor(private http: HttpClient) { }


    getPortfolio() {
        const url = this.endpoint.getPortfolio;
        return this.http.get<Portfolio>(url, { withCredentials: true });
    }


    createPortfolio(portfolio: Portfolio) {
        const url = this.endpoint.createPortfolio;
        return this.http.post<Portfolio>(url, portfolio, { withCredentials: true });
    }

}
