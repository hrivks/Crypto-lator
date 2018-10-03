import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../../services/interaction.service';
import { AppConstants } from '../../../app.constants';
import { User } from '../../../model/model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  private loggedIn: User;
  private showLoader: Boolean;

  constructor(private interactionService: InteractionService,
    private authService: AuthService) { }

  ngOnInit() {
    this.showLoader = false;
    this.interactionService.registerCallback(AppConstants.EVENTS.showLoader, (d) => { this.toggleLoader(d); });
    // register for login change
    this.interactionService.registerCallback(AppConstants.EVENTS.loginChange, (user) => {
      if (user) {
        this.loggedIn = user;
      } else {
        this.loggedIn = null;
      }
    });

    this.authService.checkLoggedIn(true)
      .subscribe((loggedIn) => {
        if (loggedIn) {
          this.loggedIn = this.authService.getLoggedInUser();
        }
      }, (err) => {
        console.error('Error checking user login status', err);
        this.loggedIn = null;
      });
  }

  logout() {
    this.authService.logout();
  }

  toggleLoader(val: boolean) {
    this.showLoader = val;
  }

}


