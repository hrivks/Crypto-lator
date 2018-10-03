import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Discussion } from '../model/model';
import { AppConstants } from '../app.constants';

@Injectable()
export class DiscussionService {

    endpoint = {
        'getDiscussions': AppConstants.ENDPOINT.baseUrl + '/discussions',
        'createDiscussion': AppConstants.ENDPOINT.baseUrl + '/discussions',
        'updateDiscussion': AppConstants.ENDPOINT.baseUrl + '/discussions/{discussionId}',
        'deleteDiscussion': AppConstants.ENDPOINT.baseUrl + '/discussions/{discussionId}',
    };

    constructor(private http: HttpClient) { }


    getDiscussions() {
        return this.http.get<Discussion[]>(this.endpoint.getDiscussions, { withCredentials: true });
    }


    createDiscussion(discussion: Discussion) {
        return this.http.post<Discussion>(this.endpoint.createDiscussion, discussion, { withCredentials: true });
    }

    updateDiscussion(discussion: Discussion) {
        const url = this.endpoint.updateDiscussion.replace('{discussionId}', discussion._id);
        return this.http.put<Discussion>(url, discussion, { withCredentials: true });
    }

    deleteDiscussion(discussion: Discussion) {
        const url = this.endpoint.deleteDiscussion.replace('{discussionId}', discussion._id);
        return this.http.delete<Discussion>(url, { withCredentials: true });
    }

}
