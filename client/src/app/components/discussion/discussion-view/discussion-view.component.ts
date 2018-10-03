import { Component, OnInit, Input } from '@angular/core';
import { Discussion } from '../../../model/model';

@Component({
  selector: 'app-discussion-view',
  templateUrl: './discussion-view.component.html',
  styleUrls: ['./discussion-view.component.css']
})
export class DiscussionViewComponent implements OnInit {

  @Input() discussion: Discussion;

  constructor() { }

  ngOnInit() {
  }

}
