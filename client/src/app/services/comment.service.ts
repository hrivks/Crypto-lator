import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Comment } from '../model/model';
import { AppConstants } from '../app.constants';

@Injectable()
export class CommentService {

    endpoint = {
        'getComments': AppConstants.ENDPOINT.baseUrl + '/discussions/{discussionId}/comments',
        'createComment': AppConstants.ENDPOINT.baseUrl + '/discussions/{discussionId}/comments',
        'updateComment': AppConstants.ENDPOINT.baseUrl + '/discussions/{discussionId}/comments/{commentId}',
        'deleteComment': AppConstants.ENDPOINT.baseUrl + '/discussions/{discussionId}/comments/{commentId}',
    };

    constructor(private http: HttpClient) { }


    getComments(discussionId: string) {
        const url = this.endpoint.getComments.replace('{discussionId}', discussionId);

        const obs = new Observable<Comment[]>((observer) => {
            this.http.get<Comment[]>(url, { withCredentials: true })
                .subscribe((comments) => {
                    comments.forEach((c) => {
                        if (c.dateCreated) {
                            c.dateCreated = new Date(c.dateCreated);
                        }
                    });
                    observer.next(comments);
                    observer.complete();
                }, (err) => {
                    observer.error(err);
                });
        });

        return obs;
    }


    createComment(comment: Comment, discussionId: string) {
        const url = this.endpoint.createComment.replace('{discussionId}', discussionId);

        const obs = new Observable<Comment>((observer) => {
            this.http.post<Comment>(url, comment, { withCredentials: true })
                .subscribe((createdComment) => {
                    if (createdComment.dateCreated) {
                        createdComment.dateCreated = new Date(createdComment.dateCreated);
                    }
                    observer.next(createdComment);
                    observer.complete();
                }, (err) => {
                    observer.error(err);
                });
        });

        return obs;
    }


    updateComment(comment: Comment, discussionId: string) {
        const url = this.endpoint.createComment
            .replace('{discussionId}', discussionId)
            .replace('{commentId}', comment._id);

        const obs = new Observable<Comment>((observer) => {
            this.http.put<Comment>(url, comment, { withCredentials: true })
                .subscribe((updatedComment) => {
                    if (updatedComment.dateCreated) {
                        updatedComment.dateCreated = new Date(updatedComment.dateCreated);
                    }
                    observer.next(updatedComment);
                    observer.complete();
                }, (err) => {
                    observer.error(err);
                });
        });

        return obs;
    }


    deleteComment(comment: Comment, discussionId: string) {
        const url = this.endpoint.deleteComment
            .replace('{discussionId}', discussionId)
            .replace('{commentId}', comment._id);
        return this.http.delete<Comment>(url, { withCredentials: true });
    }

}
