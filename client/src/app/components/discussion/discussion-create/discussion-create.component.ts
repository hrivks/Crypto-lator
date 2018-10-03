import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Discussion } from '../../../model/model';
import { DiscussionService } from '../../../services/discussion.service';

@Component({
  selector: 'app-discussion-create',
  templateUrl: './discussion-create.component.html',
  styleUrls: ['./discussion-create.component.css']
})
export class DiscussionCreateComponent implements OnInit {

  @Output() onComplete: EventEmitter<Discussion> = new EventEmitter();
  private title: string;
  private description: string;

  constructor(private discussionService: DiscussionService) { }

  ngOnInit() {
  }

  createDiscussion(form) {

    const newDiscussion = {
      title: this.title,
      description: this.description || ''
    };

    this.discussionService.createDiscussion(newDiscussion)
      .subscribe((createdDiscussion) => {
        form.resetForm();
        this.onComplete.emit(createdDiscussion);
      });
  }

}
