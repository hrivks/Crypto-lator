import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { InteractionService } from '../../../services/interaction.service';
import { AppConstants } from '../../../app.constants';
import { ErrorHandlerService } from '../../../services/error-handler.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private currentUser: User;
  private name: string;
  private password: string;
  private confirmPassword: string;
  private email: string;

  constructor(private userService: UserService,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    private interactionService: InteractionService) { }

  ngOnInit() {
    this.currentUser = this.authService.getLoggedInUser();
    this.name = this.currentUser.name;
    this.password = '';
    this.confirmPassword = '';
    this.email = this.currentUser.email;
  }

  updateUser() {
    if (this.password) {
      this.currentUser.password = this.password;
    } else {
      this.currentUser.password = null;
    }

    this.currentUser.name = this.name;
    this.currentUser.email = this.email;
    this.interactionService.showLoader(true);
    this.userService.updateUser(this.currentUser._id, this.currentUser)
      .subscribe((updatedUser) => {
        this.interactionService.showLoader(false);
        this.authService.setLoggedInUser(updatedUser);
        this.interactionService.invoke(AppConstants.EVENTS.loginChange, updatedUser);
        this.interactionService.showAlert('Changes saved successfully', 'success', true);
      }, (err) => {
        this.errorHandler.handleError('Error saving changes', err);
      });
  }

}
