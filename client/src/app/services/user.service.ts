import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { User } from '../model/model';
import { AppConstants } from '../app.constants';

@Injectable()
export class UserService {

    endpoint = {
        'login': AppConstants.ENDPOINT.baseUrl + '/user/login',
        'logout': AppConstants.ENDPOINT.baseUrl + '/user/logout',
        'loggedIn': AppConstants.ENDPOINT.baseUrl + '/user/loggedIn',
        'register': AppConstants.ENDPOINT.baseUrl + '/user/register',
        'createUser': AppConstants.ENDPOINT.baseUrl + '/user',
        'getAllUsers': AppConstants.ENDPOINT.baseUrl + '/user/all',
        'findUserByUsername': AppConstants.ENDPOINT.baseUrl + '/user?username={username}',
        'searchByName': AppConstants.ENDPOINT.baseUrl + '/user/search?name={query}',
        'findUserById': AppConstants.ENDPOINT.baseUrl + '/user/{userId}',
        'findUsersByIds': AppConstants.ENDPOINT.baseUrl + '/user/byIds?userIds={userIds}',
        'updateUser': AppConstants.ENDPOINT.baseUrl + '/user/{userId}',
        'deleteUser': AppConstants.ENDPOINT.baseUrl + '/user/{userId}'
    };

    constructor(private http: HttpClient) { }

    // #region: Authentication

    /**
     * Login user
     * @param username username
     * @param password password
     * @returns Observable that resolves to the user if the creds match; null other wise
     */
    login(username: string, password: string) {
        const url = this.endpoint.login;
        const creds = {
            username: username,
            password: password
        };

        return this.http.post<User>(url, creds, { withCredentials: true });
    }


    /** Logout user */
    logout() {
        const url = this.endpoint.logout;
        return this.http.post<User>(url, '', { withCredentials: true });
    }


    /**
     * Check if current user is logged in
     * @returns Observable that resolves to the logged-in user; null other wise
     * */
    loggedIn() {
        const url = this.endpoint.loggedIn;
        return this.http.get<User>(url, { withCredentials: true });
    }

    //#endregion: Authentication


    /**
     * Get all avaiable users
     * @returns Observable that resolves to the list of available users
     */
    getAllUsers(): Observable<User[]> {
        const url = this.endpoint.getAllUsers;
        return this.http.get<User[]>(url, { withCredentials: true });
    }


    /**
     * Search by name
     * @param query comma seperated list of usernames
     * @returns Observable that resolves to the list of users that match the given query
     */
    searchByName(query: string): Observable<User[]> {
        const url = this.endpoint.searchByName.replace('{query}', query);
        return this.http.get<User[]>(url, { withCredentials: true });
    }

    /**
       * Register new user
       * @param username username
       * @param password password
       * @returns Observable that resolves to newly registered user
       */
    register(username: string, password: string): Observable<User> {
        const url = this.endpoint.register;
        const creds = {
            username: username,
            password: password
        };

        return this.http.post<User>(url, creds);
    }

    /**
     * Create new user
     * @param user user
     * @returns Observable that resolves to newly created user
     */
    createUser(user: User) {
        const url = this.endpoint.createUser;
        const creds = {
            username: user.username,
            password: user.password,
            name: user.name,
            email: user.email,
            userType: user.userType || 'user'
        };

        return this.http.post<User>(url, creds, { withCredentials: true });
    }

    /**
     * Find user by user id
     * @param userId id of the user
     * @returns Observable that resolves to user with the specifed id; null if id doesn't exist
     */
    findUserById(userId: string): Observable<User> {
        const url = this.endpoint.findUserById.replace('{userId}', userId);
        return this.http.get<User>(url, { withCredentials: true });
    }

    /**
     * Find users by user ids
     * @param userIds comma seperated list of user ids
     * @returns Observable that resolves to the list of users with the given user ids
     */
    findUsersByIds(userIds: string): Observable<User[]> {
        const url = this.endpoint.findUsersByIds.replace('{userIds}', userIds);
        return this.http.get<User[]>(url, { withCredentials: true });
    }


    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param user updated user object
     * @returns Observable that resolves to updated user object
     */
    updateUser(userId: string, user: User): Observable<User> {
        const url = this.endpoint.updateUser.replace('{userId}', userId);
        return this.http.put<User>(url, user, { withCredentials: true });
    }


    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns Observable that resolves to deleted user object
     */
    deleteUser(userId: string): Observable<User> {
        const url = this.endpoint.deleteUser.replace('{userId}', userId);
        return this.http.delete<User>(url, { withCredentials: true });
    }
}
