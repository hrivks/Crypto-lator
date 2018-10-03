import { environment } from '../environments/environment';

export class AppConstants {
    public static EVENTS = {
        showAlert: 'showAlert',
        hideAlert: 'hideAlert',
        showLoader: 'showLoader',
        loginChange: 'loginChange',
        showFeeds: 'showFeeds'
    };

    public static ENDPOINT = environment.endpoint;
}
