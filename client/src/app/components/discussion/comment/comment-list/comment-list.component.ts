import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CommentService } from '../../../../services/comment.service';
import { Comment, User } from '../../../../model/model';
import { AuthService } from '../../../../services/auth.service';
import { ErrorHandlerService } from '../../../../services/error-handler.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnChanges {

  @Input() discussionId: string;
  private expertComments: Comment[] = [];
  private userComments: Comment[] = [];
  private isUserExpert: Boolean;
  private currentUser: User;
  private newComment: string;
  private requestInProgress: Boolean;
  private requestStatus: string;
  private deleteConfirmations: any = {};

  constructor(private commentService: CommentService,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.getComments();
    this.currentUser = this.authService.getLoggedInUser();
    if (this.currentUser) {
      this.isUserExpert = this.currentUser.userType === 'expert';
    }
  }

  ngOnChanges(): void {
    this.getComments();
  }


  getComments() {
    if (this.discussionId) {
      this.commentService.getComments(this.discussionId)
        .subscribe((comments) => {
          console.log(comments);
          this.expertComments = [];
          this.userComments = [];
          comments.forEach((c) => {
            c.dateCreated = new Date(c.dateCreated);
            if (c.isExpertAnswer) {
              this.expertComments.push(c);
            } else {
              this.userComments.push(c);
            }
          });
        });
    }
  }

  createComment() {
    if (!this.newComment || this.requestInProgress) {
      return;
    }

    this.requestInProgress = true;
    this.requestStatus = 'Posting...';
    const newComment = {
      text: this.newComment
    };

    this.commentService.createComment(newComment, this.discussionId)
      .subscribe((createdComment) => {
        this.requestInProgress = false;
        this.newComment = '';
        this.requestStatus = 'Done!';
        if (createdComment.isExpertAnswer) {
          this.expertComments.splice(0, 0, createdComment);
        } else {
          this.userComments.splice(0, 0, createdComment);
        }
      }, (err) => {
        this.requestInProgress = false;
        this.requestStatus = 'Error posting answer. Try again';
        this.errorHandler.handleError('Error posting answer', err);
      });

  }

  deleteComment(comment) {
    this.commentService.deleteComment(comment, this.discussionId)
      .subscribe((success) => {
        if (success) {
          this.getComments();
        }
      }, (err) => {
        this.errorHandler.handleError('Error deleting comment', err);
      });
  }

}
