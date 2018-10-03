import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { InteractionService } from '../../../services/interaction.service';
import { AppConstants } from '../../../app.constants';
import { AlertData } from '../../../model/ui-model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {

  // properties
  private alertType: string;
  private alertText: string | SafeHtml;
  private alertVisible: boolean;

  constructor(private sce: DomSanitizer,
    private interactionService: InteractionService) { }

  ngOnInit() {
    this.alertVisible = false;
    this.interactionService.registerCallback(AppConstants.EVENTS.showAlert, (d) => { this.showAlert(d); });
    this.interactionService.registerCallback(AppConstants.EVENTS.hideAlert, () => { this.hideAlert(); });
  }

  /**
   * show alert on page
   * @param data alert data
   */
  showAlert(data: AlertData) {
    if (data.text) {
      this.alertText = this.sce.bypassSecurityTrustHtml(data.text);
      this.alertType = data.type || 'danger';
      this.alertVisible = true;

      if (data.autoClose) {
        setTimeout(() => {
          this.alertVisible = false;
        }, 3000);
      }
    }
  }

  /** Hide alert */
  hideAlert() {
    this.alertVisible = false;
    this.alertType = '';
  }

}
