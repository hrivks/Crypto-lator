import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../../services/interaction.service';
import { AppConstants } from '../../../app.constants';


@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  // properties
  private showLoader = false;

  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.registerCallback(AppConstants.EVENTS.showLoader, (d) => { this.toggleLoader(d); });
  }

  /**
   * Show / hide loader
   * @param val true to show, false to hide
   */
  toggleLoader(val: boolean) {
    this.showLoader = val;
  }
}
