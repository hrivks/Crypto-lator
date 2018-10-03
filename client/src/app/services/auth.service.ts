import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/model';
import { UserService } from './user.service';
import { ErrorHandlerService } from './error-handler.service';
import { CanActivate } from '@angular/router';
import { InteractionService } from './interaction.service';
import { AppConstants } from '../app.constants';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router/src/router_state';

@Injectable()
export class AuthService implements CanActivate {
    // properties
    loggedInUser: User;

    api = {
        'getLoggedInUser': this.getLoggedInUser,
        'setLoggedInUser': this.setLoggedInUser,
        'login': this.login,
        'logout': this.logout
    };

    constructor(private router: Router,
        private activatedRouter: ActivatedRoute,
        private userService: UserService,
        private interactionService: InteractionService,
        private errorHandlerService: ErrorHandlerService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.checkLoggedIn(false, state.url);
    }


    /**
     * Check if user is logged in
     * @returns logged in user object; null, if user is not logged in
     */
    getLoggedInUser(): User {
        this.loggedInUser = this.loggedInUser || JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.loggedInUser) {
            return Object.assign({}, this.loggedInUser);
        } else {
            return null;
        }
    }


    /** Set user as logged in user */
    setLoggedInUser(user: User): void {
        this.loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
        this.interactionService.invoke(AppConstants.EVENTS.loginChange, Object.assign({}, this.loggedInUser));
    }

    /** Remove logged in user */
    removeLoggedInUser(): void {
        this.loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        this.interactionService.invoke(AppConstants.EVENTS.loginChange, null);
    }

    /**
     * Login user
     * @param username username
     * @param password password
     * @returns logged in user; null if login fails
     */
    login(username: string, password: string): Observable<User> {
        const obs = new Observable<User>((observer) => {
            this.userService.login(username, password)
                .subscribe((loggedInUser) => {
                    this.interactionService.invoke(AppConstants.EVENTS.loginChange);
                    this.setLoggedInUser(loggedInUser);
                    observer.next(Object.assign({}, loggedInUser));
                    observer.complete();
                }, (err) => {
                    this.removeLoggedInUser();
                    observer.error(err);
                });
        });

        return obs;
    }

    /**
     * Check if user is logged in
     * @param disableRedirect true, if redirect to login page must be disabled
     * @param accessedRoute route that was tried to be accessed
     * @returns subscription that resolves to true if the user is logged in, false otherwise
     */
    checkLoggedIn(disableRedirect?: boolean, accessedRoute?: string): Observable<boolean> {
        const obs = new Observable<boolean>((observer) => {
            this.userService.loggedIn()
                .subscribe((res) => {
                    if (res) {
                        this.setLoggedInUser(res);
                        observer.next(true);
                        observer.complete();
                    } else {
                        this.removeLoggedInUser();
                        if (!disableRedirect) {
                            this.interactionService.showAlert('Login to continue', 'warning', true);
                            this.router.navigate(['/login'], { queryParams: { next: accessedRoute } });
                        }
                        observer.next(false);
                        observer.complete();
                    }
                }, (err) => {
                    console.error('Error checking login status', err);
                    this.removeLoggedInUser();
                    observer.next(false);
                    observer.complete();
                });
        });

        return obs;
    }


    /**
     * Logout user
     */
    logout() {
        this.interactionService.showLoader(true);
        this.removeLoggedInUser();
        this.userService.logout()
            .subscribe((res) => {
                this.interactionService.showLoader(false);
                this.interactionService.showAlert('You have been logged out successfully', 'success', true);
                this.router.navigate(['/']);
            }, (err) => {
                console.log(err);
                this.errorHandlerService.handleError('Oops! Strange! Can\'t log you out!', err);
                this.router.navigate(['/']);
            });
    }

}
