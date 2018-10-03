import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Portfolio, User, Fund } from '../model/model';
import { AppConstants } from '../app.constants';

@Injectable()
export class FundService {

    endpoint = {
        'getFunds': AppConstants.ENDPOINT.baseUrl + '/portfolio/{portfolioId}/funds',
        'updateFund': AppConstants.ENDPOINT.baseUrl + '/portfolio/{portfolioId}/funds/update',
    };

    constructor(private http: HttpClient) { }


    getFunds(portfolio: Portfolio) {
        const url = this.endpoint.getFunds.replace('{portfolioId}', portfolio._id);
        return this.http.get<Fund[]>(url, { withCredentials: true });
    }


    updateFund(portfolio: Portfolio, fund: Fund) {
        const url = this.endpoint.updateFund.replace('{portfolioId}', portfolio._id);
        return this.http.post<Fund>(url, fund, { withCredentials: true });
    }

}
