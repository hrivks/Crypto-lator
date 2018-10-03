import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { Discussion } from '../../../model/model';
import { DiscussionService } from '../../../services/discussion.service';
import { InteractionService } from '../../../services/interaction.service';

@Component({
  selector: 'app-discussion-edit',
  templateUrl: './discussion-edit.component.html',
  styleUrls: ['./discussion-edit.component.css']
})
export class DiscussionEditComponent implements OnInit, OnChanges {

  @Output() onComplete: EventEmitter<Discussion> = new EventEmitter();
  @Input() discussion: Discussion;
  private title: string;
  private description: string;

  constructor(private discussionService: DiscussionService,
    private interactionService: InteractionService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.title = this.discussion.title;
    this.description = this.discussion.description;
  }

  updateDiscussion() {
    this.discussion.title = this.title;
    this.discussion.description = this.description;

    this.discussionService.updateDiscussion(this.discussion)
      .subscribe((updatedDiscussion) => {
        if (updatedDiscussion) {
          this.onComplete.emit(updatedDiscussion);
        } else {
          this.interactionService.showAlert('Unable to update discussion', 'danger');
        }
      });
  }
}
