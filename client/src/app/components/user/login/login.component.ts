import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../model/model';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';
import { InteractionService } from '../../../services/interaction.service';
import { ErrorHandlerService } from '../../../services/error-handler.service';
import { ParamMap } from '@angular/router/src/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // properties
  username: string;
  password: string;
  redirectTo: string;

  constructor(private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private interactionService: InteractionService,
    private errorHanderService: ErrorHandlerService) {
    this.activatedRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.redirectTo = params.get('next');
    });
  }

  ngOnInit() {
  }

  /** Login User */
  login() {
    this.interactionService.hideAlert();
    this.interactionService.showLoader(true);
    this.authService.login(this.username, this.password)
      .subscribe((usr) => {
        this.interactionService.showLoader(false);
        if (this.redirectTo) {
          this.router.navigateByUrl(this.redirectTo);
        } else {
          this.router.navigate(['/portfolio']);
        }
      }, (err) => {
        if (err.status === 401) {
          this.interactionService.showLoader(false);
          this.interactionService.showAlert('Login failed. Please check username and password and try again');
        } else {
          this.errorHanderService.handleError('Login Failed', err);
        }
      });
  }

}
