import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { InteractionService } from '../../../services/interaction.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { User } from '../../../model/model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  // properties
  username: string;
  password: string;
  verifyPassword: string;
  registrationErrors: any = {};

  constructor(private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private interactionsService: InteractionService,
    private errorHanderService: ErrorHandlerService) { }

  ngOnInit() {
  }

  register() {
    const newUser = new User();
    newUser.username = this.username;
    newUser.password = this.password;

    // create new user
    this.interactionsService.showLoader(true);
    this.userService.register(this.username, this.password)
      .subscribe(
        (registeredUser) => {
          if (registeredUser) {
            this.authService.setLoggedInUser(registeredUser);
            this.interactionsService.showLoader(false);
            console.log(registeredUser);
            this.router.navigate(['/portfolio']);
          } else {
            this.interactionsService.showAlert('Registration unsuccessful! <br/> Server returned empty user object');
          }
        },
        (err) => {
          this.errorHanderService.handleError('Error registering user', err);
          this.interactionsService.showLoader(false);
        }
      );
  }

}
