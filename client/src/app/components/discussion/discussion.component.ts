import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../../services/discussion.service';
import { Discussion, User } from '../../model/model';
import { InteractionService } from '../../services/interaction.service';
import { ErrorHandlerService } from '../../services/error-handler.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
declare const $;

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {

  private discussions: Discussion[];
  private openModalTitle: string;
  private selectedDiscussion: Discussion;
  private deleteConfirmation: Boolean;
  private currentUser: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private discussionService: DiscussionService,
    private interactionService: InteractionService,
    private errorHandler: ErrorHandlerService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.currentUser = this.authService.getLoggedInUser();
    this.getAllDiscussions();
  }

  getAllDiscussions() {

    this.discussionService.getDiscussions()
      .subscribe((discussions) => {
        this.discussions = discussions;
        this.activatedRoute.paramMap.subscribe((params) => {
          const discussionId = params.get('discussionId');
          if (!discussionId) {
            if (this.discussions.length > 0) {
              this.router.navigate(['/discussion', this.discussions[0]._id]);
            }
          } else {
            this.deleteConfirmation = false;
            this.selectedDiscussion = this.discussions.find((d) => {
              return d._id === discussionId;
            });
            if (!this.selectedDiscussion) {
              this.interactionService.showAlert('Discusssion with id ' + discussionId + 'does not exist', 'danger');
            }
          }
        });
      }, (err) => {
        this.errorHandler.handleError('Error retrieving disucssions', err);
      });
  }

  onDiscussionCreated(createdDiscussion) {
    $('#createUpdateFundModal').modal('hide');
    this.discussions.splice(0, 0, createdDiscussion);
    this.router.navigate(['/discussion/' + createdDiscussion._id]);
  }

  onDiscussionUpdated(updatedDiscussion) {
    $('#createUpdateFundModal').modal('hide');
  }

  openCreateDiscussionModal() {
    this.openModalTitle = 'Create';
    $('#createUpdateFundModal').modal('show');
  }

  openEditDiscussionModal() {
    this.openModalTitle = 'Edit';
    $('#createUpdateFundModal').modal('show');
  }

  deleteDiscussion(discussion) {
    this.discussionService.deleteDiscussion(discussion)
      .subscribe((deletedDiscussion) => {
        this.interactionService.showAlert('Discussion deleted successfully', 'success');
        this.router.navigate(['/discussion']);
      }, (err) => {
        this.errorHandler.handleError('Error deleting discussion', err);
      });
  }

}
