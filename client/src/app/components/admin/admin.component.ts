import { Component, OnInit } from '@angular/core';
import { User } from '../../model/model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { InteractionService } from '../../services/interaction.service';
import { ErrorHandlerService } from '../../services/error-handler.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private users: User[];
  private currentUser: User;
  private selectedUser: User;

  private username: string;
  private name: string;
  private password: string;
  private confirmPassword: string;
  private email: string;
  private userType: string;
  private deleteConfirmation: Boolean;

  constructor(private userService: UserService,
    private authService: AuthService,
    private interactionService: InteractionService,
    private errorHandler: ErrorHandlerService) { }

  ngOnInit() {
    this.currentUser = this.authService.getLoggedInUser();
    if (this.currentUser.userType !== 'admin') {
      this.interactionService.showAlert('Unauthorized. You do not have admin access', 'danger');
    } else {
      this.getAllUsers();
    }
    this.userType = 'user';
  }

  getAllUsers() {
    this.deleteConfirmation = false;
    this.interactionService.showLoader(true);
    this.userService.getAllUsers()
      .subscribe((users) => {
        this.users = users.filter((u) => u._id !== this.currentUser._id);
        this.interactionService.showLoader(false);
      });
  }

  selectUser(user) {
    this.deleteConfirmation = false;
    this.selectedUser = user;
    this.username = this.selectedUser.username;
    this.name = this.selectedUser.name;
    this.email = this.selectedUser.email;
    this.userType = this.selectedUser.userType;
  }

  resetForm() {
    this.selectedUser = null;
    this.username = '';
    this.name = '';
    this.email = '';
    this.userType = 'user';
    this.deleteConfirmation = false;
  }

  updateUser() {
    const updateUser = {
      _id: null,
      username: this.username,
      name: this.name || '',
      password: this.password,
      email: this.email || '',
      userType: this.userType
    };

    this.interactionService.showLoader(true);

    if (this.selectedUser) {
      // update user
      updateUser._id = this.selectedUser._id;

      this.userService.updateUser(this.selectedUser._id, updateUser)
        .subscribe((updatedUser) => {
          this.interactionService.showAlert('Update successful', 'success', true);
          this.getAllUsers();
        }, (err) => {
          this.errorHandler.handleError('Error updating user', err);
        });
    } else {
      // create user
      this.userService.createUser(updateUser)
        .subscribe((createdUser) => {
          this.users.splice(0, 0, createdUser);
          this.selectedUser = createdUser;
          this.interactionService.showLoader(false);
        }, (err) => {
          this.errorHandler.handleError('Error creating user', err);
        });
    }
  }

  deleteUser() {
    this.interactionService.showLoader(true);
    this.userService.deleteUser(this.selectedUser._id)
      .subscribe((deletedUser) => {
        this.interactionService.showAlert('User deleted successfully', 'success', true);
        this.getAllUsers();
      }, (err) => {
        this.errorHandler.handleError('Error deleting user', err);
      });
  }

}
