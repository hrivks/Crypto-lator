import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from '../../../model/model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discussion-list',
  templateUrl: './discussion-list.component.html',
  styleUrls: ['./discussion-list.component.css']
})
export class DiscussionListComponent implements OnInit {

  @Input() discussions: Discussion[];
  private selectedDiscussion: string;

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      this.selectedDiscussion = param.get('discussionId');
    });
  }

  openDisucssion(discussion) {
    this.router.navigate(['/discussion', discussion._id]);
  }

}
