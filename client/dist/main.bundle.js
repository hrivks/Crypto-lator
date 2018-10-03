webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_gendir lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n\r\n<app-alert></app-alert>\r\n\r\n<div class=\"container-fluid mt-3\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-loader></app-loader>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConstants; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("./src/environments/environment.ts");

var AppConstants = (function () {
    function AppConstants() {
    }
    return AppConstants;
}());

AppConstants.EVENTS = {
    showAlert: 'showAlert',
    hideAlert: 'hideAlert',
    showLoader: 'showLoader',
    loginChange: 'loginChange',
    showFeeds: 'showFeeds'
};
AppConstants.ENDPOINT = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].endpoint;
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shared_alert_alert_component__ = __webpack_require__("./src/app/components/shared/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shared_loader_loader_component__ = __webpack_require__("./src/app/components/shared/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shared_nav_nav_component__ = __webpack_require__("./src/app/components/shared/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_portfolio_portfolio_component__ = __webpack_require__("./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_portfolio_service__ = __webpack_require__("./src/app/services/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_currency_currency_component__ = __webpack_require__("./src/app/components/currency/currency.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_fund_fund_buy_sell_fund_buy_sell_component__ = __webpack_require__("./src/app/components/fund/fund-buy-sell/fund-buy-sell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_fund_service__ = __webpack_require__("./src/app/services/fund.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_fund_fund_list_fund_list_component__ = __webpack_require__("./src/app/components/fund/fund-list/fund-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_discussion_service__ = __webpack_require__("./src/app/services/discussion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_discussion_discussion_component__ = __webpack_require__("./src/app/components/discussion/discussion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_discussion_discussion_list_discussion_list_component__ = __webpack_require__("./src/app/components/discussion/discussion-list/discussion-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_discussion_discussion_view_discussion_view_component__ = __webpack_require__("./src/app/components/discussion/discussion-view/discussion-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_discussion_discussion_edit_discussion_edit_component__ = __webpack_require__("./src/app/components/discussion/discussion-edit/discussion-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_discussion_discussion_create_discussion_create_component__ = __webpack_require__("./src/app/components/discussion/discussion-create/discussion-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_discussion_comment_comment_list_comment_list_component__ = __webpack_require__("./src/app/components/discussion/comment/comment-list/comment-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_pipes_filter_currency_pipe__ = __webpack_require__("./src/app/components/pipes/filter-currency.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__directives_screen_height_directive__ = __webpack_require__("./src/app/directives/screen-height.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_user_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_shared_alert_alert_component__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_shared_loader_loader_component__["a" /* LoaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_shared_nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_currency_currency_component__["a" /* CurrencyComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_fund_fund_buy_sell_fund_buy_sell_component__["a" /* FundBuySellComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_fund_fund_list_fund_list_component__["a" /* FundListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_discussion_discussion_component__["a" /* DiscussionComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_discussion_discussion_list_discussion_list_component__["a" /* DiscussionListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_discussion_discussion_view_discussion_view_component__["a" /* DiscussionViewComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_discussion_discussion_edit_discussion_edit_component__["a" /* DiscussionEditComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_discussion_discussion_create_discussion_create_component__["a" /* DiscussionCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_discussion_comment_comment_list_comment_list_component__["a" /* CommentListComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_user_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_30__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_31__components_user_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_32__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_pipes_filter_currency_pipe__["a" /* FilterCurrencyPipe */],
            __WEBPACK_IMPORTED_MODULE_34__directives_screen_height_directive__["a" /* ScreenHeightDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing__["a" /* Routing */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_interaction_service__["a" /* InteractionService */],
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_14__services_error_handler_service__["a" /* ErrorHandlerService */],
            __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__services_portfolio_service__["a" /* PortfolioService */],
            __WEBPACK_IMPORTED_MODULE_16__services_currency_service__["a" /* CurrencyService */],
            __WEBPACK_IMPORTED_MODULE_19__services_fund_service__["a" /* FundService */],
            __WEBPACK_IMPORTED_MODULE_21__services_discussion_service__["a" /* DiscussionService */],
            __WEBPACK_IMPORTED_MODULE_27__services_comment_service__["a" /* CommentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_portfolio_portfolio_component__ = __webpack_require__("./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_discussion_discussion_component__ = __webpack_require__("./src/app/components/discussion/discussion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_component__ = __webpack_require__("./src/app/components/admin/admin.component.ts");









var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__components_user_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_2__components_portfolio_portfolio_component__["a" /* PortfolioComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]] },
    { path: 'discussion', component: __WEBPACK_IMPORTED_MODULE_3__components_discussion_discussion_component__["a" /* DiscussionComponent */] },
    { path: 'discussion/:discussionId', component: __WEBPACK_IMPORTED_MODULE_3__components_discussion_discussion_component__["a" /* DiscussionComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_8__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_service__["a" /* AuthService */]] }
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <h3 class=\"font-weight-light\">\n        <i class=\"fas fa-bolt mr-2\"></i> Admin\n    </h3>\n    <hr>\n\n    <div class=\"row mt-2\">\n        <!-- user list -->\n        <div class=\"col-5\">\n            <dd>USERS</dd>\n            <div appScreenHeight>\n                <ul class=\"list-group shadow\">\n                    <li class=\"list-group-item list-group-item-action\"\n                        *ngFor=\"let thisUser of users\"\n                        [ngClass]=\"{'list-group-item-primary': thisUser === selectedUser}\"\n                        (click)=\"selectUser(thisUser)\">\n                        <span class=\"float-left\">\n                      <i *ngIf=\"thisUser.userType==='user'\"\n                      class=\"fas fa-user-circle fa-lg text-muted\"></i>\n                      <i *ngIf=\"thisUser.userType==='expert'\"\n                      class=\"fas fa-street-view fa-lg text-success\"></i>\n                      <i *ngIf=\"thisUser.userType==='admin'\"\n                      class=\"fas fa-bolt fa-lg text-warning\"></i>\n                  </span>\n                        <span class=\"pl-3 mr-2\">{{thisUser.name}}</span> <span class=\"font-italic text-primary small\">@{{thisUser.username}}</span>\n                    </li>\n                </ul>\n            </div>\n        </div>\n\n        <!-- user edit / create -->\n        <div class=\"col border border-bottom-0 border-right-0 border-top-0\">\n            <span *ngIf=\"selectedUser\"\n                  class=\"btn btn-outline-success float-right btn-sm\"\n                  (click)=\"resetForm()\">\n              <i class=\"fas fa-plus\"></i> NEW USER\n            </span>\n            <dd *ngIf=\"selectedUser\">EDIT <span class=\"text-primary\">@{{selectedUser.username}}</span></dd>\n            <dd *ngIf=\"!selectedUser\">NEW USER</dd>\n\n            <form class=\"form shadow mt-3 p-3 border rounded\"\n                  (ngSubmit)=\"updateUser()\"\n                  #updateUserForm=\"ngForm\">\n\n                <!-- Username -->\n                <div class=\"form-group\">\n                    <label class=\"control-label small text-dark\"\n                           for=\"name\">USERNAME</label>\n                    <input placeholder=\"Username\"\n                           type=\"text\"\n                           class=\"form-control form-control-sm py-1\"\n                           name=\"userNameField\"\n                           [(ngModel)]=\"username\"\n                           #nameField=\"ngModel\"\n                           required/>\n                </div>\n\n                <!-- User Type -->\n                <div class=\"form-group\">\n                    <label class=\"control-label small text-dark\"\n                           for=\"name\">USER TYPE</label>\n                    <div class=\"btn-group ml-3\"\n                         role=\"group\">\n                        <button type=\"button\"\n                                [ngClass]=\"{'btn-primary' : userType === 'user'}\"\n                                (click)=\"userType='user'\"\n                                class=\"btn btn-sm \">USER</button>\n                        <button type=\"button\"\n                                [ngClass]=\"{'btn-primary' : userType === 'expert'}\"\n                                (click)=\"userType='expert'\"\n                                class=\"btn btn-sm \">EXPERT</button>\n                        <button type=\"button\"\n                                [ngClass]=\"{'btn-primary' : userType === 'admin'}\"\n                                (click)=\"userType='admin'\"\n                                class=\"btn btn-sm\">ADMIN</button>\n                    </div>\n                </div>\n\n                <!-- Name -->\n                <div class=\"form-group\">\n                    <label class=\"control-label small text-dark\"\n                           for=\"name\">NAME</label>\n                    <input placeholder=\"Name\"\n                           type=\"text\"\n                           class=\"form-control form-control-sm py-1\"\n                           name=\"nameField\"\n                           [(ngModel)]=\"name\"\n                           #nameField=\"ngModel\" />\n                </div>\n\n                <div class=\"row pt-2\">\n                    <!-- Password -->\n                    <div class=\"form-group col-sm-6 col-12\">\n                        <label class=\"control-label small text-dark\"\n                               for=\"password\">PASSWORD</label>\n                        <input placeholder=\"*****\"\n                               type=\"password\"\n                               class=\"form-control form-control-sm py-1\"\n                               name=\"passwordField\"\n                               [(ngModel)]=\"password\"\n                               #passwordField=\"ngModel\" />\n                    </div>\n\n                    <!-- Verify Password -->\n                    <div class=\"form-group col-sm-6 col-12\">\n                        <label class=\"control-label small text-dark\"\n                               for=\"name\">CONFIRM PASSWORD</label>\n                        <input placeholder=\"******\"\n                               type=\"password\"\n                               class=\"form-control form-control-sm py-1\"\n                               name=\"confirmPasswordField\"\n                               [(ngModel)]=\"confirmPassword\"\n                               #confirmPasswordField=\"ngModel\" />\n                        <span *ngIf=\"confirmPassword !== password && confirmPasswordField.touched\"\n                              class=\"text-danger ml-2 small\">Passwords do not match</span>\n                    </div>\n\n                </div>\n\n                <!-- Email -->\n                <div class=\"form-group pt-2\">\n                    <label class=\"control-label small text-dark\"\n                           for=\"name\">EMAIL</label>\n                    <input placeholder=\"Email\"\n                           type=\"text\"\n                           class=\"form-control form-control-sm py-1\"\n                           name=\"emailField\"\n                           [(ngModel)]=\"email\"\n                           #emailField=\"ngModel\" />\n                </div>\n\n                <!-- form actions -->\n                <div>\n                    <button type=\"submit\"\n                            class=\"btn btn-sm btn-primary py-1\"\n                            [disabled]=\"updateUserForm.invalid || confirmPassword !== password\">\n                          {{selectedUser? 'SAVE' : 'CREATE'}}\n                          </button>\n                    <span class=\"btn btn-sm btn-outline-danger py-1\"\n                          (click)=\"deleteConfirmation=true\"\n                          [hidden]=\"!selectedUser || deleteConfirmation\">\n                       Delete\n                        </span>\n                    <span class=\"btn btn-sm btn-outline-danger py-1\"\n                          (click)=\"deleteUser()\"\n                          [hidden]=\"!selectedUser || !deleteConfirmation\">\n                       Sure?\n                      </span>\n                </div>\n                <!-- /form actions -->\n            </form>\n            <!--/form-->\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = (function () {
    function AdminComponent(userService, authService, interactionService, errorHandler) {
        this.userService = userService;
        this.authService = authService;
        this.interactionService = interactionService;
        this.errorHandler = errorHandler;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getLoggedInUser();
        if (this.currentUser.userType !== 'admin') {
            this.interactionService.showAlert('Unauthorized. You do not have admin access', 'danger');
        }
        else {
            this.getAllUsers();
        }
        this.userType = 'user';
    };
    AdminComponent.prototype.getAllUsers = function () {
        var _this = this;
        this.deleteConfirmation = false;
        this.interactionService.showLoader(true);
        this.userService.getAllUsers()
            .subscribe(function (users) {
            _this.users = users.filter(function (u) { return u._id !== _this.currentUser._id; });
            _this.interactionService.showLoader(false);
        });
    };
    AdminComponent.prototype.selectUser = function (user) {
        this.deleteConfirmation = false;
        this.selectedUser = user;
        this.username = this.selectedUser.username;
        this.name = this.selectedUser.name;
        this.email = this.selectedUser.email;
        this.userType = this.selectedUser.userType;
    };
    AdminComponent.prototype.resetForm = function () {
        this.selectedUser = null;
        this.username = '';
        this.name = '';
        this.email = '';
        this.userType = 'user';
        this.deleteConfirmation = false;
    };
    AdminComponent.prototype.updateUser = function () {
        var _this = this;
        var updateUser = {
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
                .subscribe(function (updatedUser) {
                _this.interactionService.showAlert('Update successful', 'success', true);
                _this.getAllUsers();
            }, function (err) {
                _this.errorHandler.handleError('Error updating user', err);
            });
        }
        else {
            // create user
            this.userService.createUser(updateUser)
                .subscribe(function (createdUser) {
                _this.users.splice(0, 0, createdUser);
                _this.selectedUser = createdUser;
                _this.interactionService.showLoader(false);
            }, function (err) {
                _this.errorHandler.handleError('Error creating user', err);
            });
        }
    };
    AdminComponent.prototype.deleteUser = function () {
        var _this = this;
        this.interactionService.showLoader(true);
        this.userService.deleteUser(this.selectedUser._id)
            .subscribe(function (deletedUser) {
            _this.interactionService.showAlert('User deleted successfully', 'success', true);
            _this.getAllUsers();
        }, function (err) {
            _this.errorHandler.handleError('Error deleting user', err);
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("./src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("./src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _d || Object])
], AdminComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "./src/app/components/currency/currency.component.css":
/***/ (function(module, exports) {

module.exports = ".cc {\r\n    font-size: 24px;\r\n    vertical-align: text-top;\r\n}"

/***/ }),

/***/ "./src/app/components/currency/currency.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group mb-1\">\n\n    <input type=\"text\"\n           placeholder=\"Search Currency\"\n           class=\"form-control form-control-sm w-50 ml-auto\"\n           [(ngModel)]=\"currencySearch\">\n\n</div>\n<div class=\"scroll-container border border-left-0 border-right-0 rounded shadow\"\n     appScreenHeight>\n    <ul class=\"list-group shadow rounded\">\n        <li *ngFor=\"let thisCurrency of currency | filterCurrency: currencySearch\"\n            class=\"list-group-item\">\n            <div class=\"row\">\n                <div class=\"col-1\">\n                    <i class=\"cc {{thisCurrency.symbol.toUpperCase()}}\"></i>\n                </div>\n                <div class=\"col-6\">\n                    <div>\n                        <span>{{thisCurrency.name}} </span>\n                        <!-- <span>|</span> -->\n                        <span class=\"badge badge-primary text-monospace small font-weight-bold\">{{thisCurrency.symbol}}</span>\n                    </div>\n                    <div>\n                        <span class=\"text-muted small\"\n                              title=\"Rank\">Rank #{{thisCurrency.rank}}</span>\n                    </div>\n                </div>\n\n                <div class=\"col\">\n                    <div class=\"btn btn-outline-success py-2 float-right mt-1\"\n                         (click)=\"onCurrencySelect(thisCurrency)\"\n                         title=\"buy\">\n                        <span>$ {{thisCurrency.value.toFixed(3)}}</span>\n                        <span class=\"fas fa-shopping-cart\"></span>\n                    </div>\n\n                </div>\n            </div>\n        </li>\n        <li class=\"list-group-item\"\n            *ngIf=\"(currency | filterCurrency: currencySearch).length == 0\">\n            <i>No currency found</i>\n        </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/currency/currency.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CurrencyComponent = (function () {
    function CurrencyComponent(currencyService) {
        this.currencyService = currencyService;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.objectKeys = Object.keys;
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currencyService.getCurrency()
            .subscribe(function (result) {
            _this.currency = Object.values(result);
        }, function (err) {
            console.log('Error retrieving currency values', err);
        });
    };
    CurrencyComponent.prototype.onCurrencySelect = function (selectedCurrency) {
        console.log(selectedCurrency);
        this.onSelect.emit(selectedCurrency);
    };
    return CurrencyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], CurrencyComponent.prototype, "onSelect", void 0);
CurrencyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-currency-list',
        template: __webpack_require__("./src/app/components/currency/currency.component.html"),
        styles: [__webpack_require__("./src/app/components/currency/currency.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_currency_service__["a" /* CurrencyService */]) === "function" && _b || Object])
], CurrencyComponent);

var _a, _b;
//# sourceMappingURL=currency.component.js.map

/***/ }),

/***/ "./src/app/components/discussion/comment/comment-list/comment-list.component.css":
/***/ (function(module, exports) {

module.exports = ".create-comment {\r\n    background-color: #f3f3f3;\r\n}"

/***/ }),

/***/ "./src/app/components/discussion/comment/comment-list/comment-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"comments\">\n    <div *ngIf=\"currentUser\"\n         class=\"create-comment border border-left-0 border-right-0 border-top-0 shadow-sm rounded p-3\">\n\n        <form class=\"form\"\n              (ngSubmit)=\"createComment()\"\n              #expertCommentForm=\"ngForm\">\n\n            <textarea placeholder=\"{{isUserExpert? 'Expert Answer' : 'Type here...' }}\"\n                      class=\"form-control form-control-sm h-100 pt-1\"\n                      name=\"newCommentField\"\n                      [(ngModel)]=\"newComment\"\n                      #newExpertCommentField=\"ngModel\"></textarea>\n            <button class=\"btn btn-outline-primary btn-sm mt-2\"\n                    [disabled]=\"requestInProgress\"\n                    type=\"submit\">\n                                   <i class=\"fas fa-plus mr-2\"></i> \n                                   {{isUserExpert? 'Post Expert Answer' : 'Post Comment' }}\n                        </button>\n            <span class=\"small text-primary font-italic ml-2 align-bottom\">{{requestStatus}}</span>\n\n        </form>\n    </div>\n\n    <!-- Expert Answers -->\n    <dd class=\"text-primary font-weight-bold small mt-3\">EXPERT ANSWERS</dd>\n    <div class=\"expert-comments pl-4 mt-1 border border-left-0 border-right-0 border-bottom-0 border-primary\">\n        <div class=\"mt-3 small font-italic text-muted\"\n             *ngIf=\"expertComments.length === 0\">\n            No expert answers available\n        </div>\n        <div class=\"shadow-sm border rounded border-primary border-top-0 border-right-0 border-bottom-0 p-3 my-3\"\n             *ngFor=\"let thisComment of expertComments\">\n            <div>\n                {{thisComment.text}}\n            </div>\n            <div class=\"small text-primary mt-1\">\n                <span class=\"mr-2 font-italic\">@{{thisComment.createdBy}} </span>\n                <span *ngIf=\"currentUser && (thisComment.createdBy === currentUser.username || currentUser.userType === 'admin')\">\n                <span class=\"btn btn-sm btn-outline-danger badge py-1 px-1\"\n                      [hidden]=\"deleteConfirmations[thisComment._id]\"\n                      (click)=\"deleteConfirmations[thisComment._id] = true\">\n                    <i class=\"fas fa-times\"></i> DELETE\n                </span>\n                <span class=\"btn btn-sm btn-outline-danger badge py-1 px-1\"\n                      [hidden]=\"!deleteConfirmations[thisComment._id]\"\n                      (click)=\"deleteComment(thisComment)\">\n                    <i class=\"fas fa-times\"></i> SURE?\n                </span>\n                </span>\n\n                <span class=\"ml-2 text-muted float-right\">{{thisComment.dateCreated.toLocaleString()}} </span>\n            </div>\n        </div>\n    </div>\n\n    <!-- User Comments -->\n    <dd class=\"text-muted font-weight-bold small mt-3\">USER COMMENTS</dd>\n    <div class=\"user-comments pl-4 mt-1 border border-left-0 border-right-0 border-bottom-0\">\n        <div class=\"mt-3 small font-italic text-muted\"\n             *ngIf=\"userComments.length === 0\">\n            No user comments available\n        </div>\n        <div class=\"shadow-sm border rounded border-top-0 border-right-0 border-bottom-0 p-3 my-3\"\n             *ngFor=\"let thisComment of userComments\">\n            <div>\n                {{thisComment.text}}\n            </div>\n            <div class=\"small text-dark mt-1\">\n                <span class=\"mr-2 font-italic text-muted\">@{{thisComment.createdBy}} </span>\n                <span *ngIf=\"currentUser && (thisComment.createdBy === currentUser.username || currentUser.userType === 'admin')\">\n                <span class=\"btn btn-sm btn-outline-danger badge py-1 px-1\"\n                      [hidden]=\"deleteConfirmations[thisComment._id]\"\n                      (click)=\"deleteConfirmations[thisComment._id] = true\">\n                    <i class=\"fas fa-times\"></i> DELETE\n                </span>\n                <span class=\"btn btn-sm btn-outline-danger badge py-1 px-1\"\n                      [hidden]=\"!deleteConfirmations[thisComment._id]\"\n                      (click)=\"deleteComment(thisComment)\">\n                    <i class=\"fas fa-times\"></i> SURE?\n                </span>\n                </span>\n\n                <span class=\"ml-2 text-muted float-right\">{{thisComment.dateCreated.toLocaleString()}} </span>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/discussion/comment/comment-list/comment-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_service__ = __webpack_require__("./src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentListComponent = (function () {
    function CommentListComponent(commentService, authService, errorHandler) {
        this.commentService = commentService;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.expertComments = [];
        this.userComments = [];
        this.deleteConfirmations = {};
    }
    CommentListComponent.prototype.ngOnInit = function () {
        this.getComments();
        this.currentUser = this.authService.getLoggedInUser();
        if (this.currentUser) {
            this.isUserExpert = this.currentUser.userType === 'expert';
        }
    };
    CommentListComponent.prototype.ngOnChanges = function () {
        this.getComments();
    };
    CommentListComponent.prototype.getComments = function () {
        var _this = this;
        if (this.discussionId) {
            this.commentService.getComments(this.discussionId)
                .subscribe(function (comments) {
                console.log(comments);
                _this.expertComments = [];
                _this.userComments = [];
                comments.forEach(function (c) {
                    c.dateCreated = new Date(c.dateCreated);
                    if (c.isExpertAnswer) {
                        _this.expertComments.push(c);
                    }
                    else {
                        _this.userComments.push(c);
                    }
                });
            });
        }
    };
    CommentListComponent.prototype.createComment = function () {
        var _this = this;
        if (!this.newComment || this.requestInProgress) {
            return;
        }
        this.requestInProgress = true;
        this.requestStatus = 'Posting...';
        var newComment = {
            text: this.newComment
        };
        this.commentService.createComment(newComment, this.discussionId)
            .subscribe(function (createdComment) {
            _this.requestInProgress = false;
            _this.newComment = '';
            _this.requestStatus = 'Done!';
            if (createdComment.isExpertAnswer) {
                _this.expertComments.splice(0, 0, createdComment);
            }
            else {
                _this.userComments.splice(0, 0, createdComment);
            }
        }, function (err) {
            _this.requestInProgress = false;
            _this.requestStatus = 'Error posting answer. Try again';
            _this.errorHandler.handleError('Error posting answer', err);
        });
    };
    CommentListComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        this.commentService.deleteComment(comment, this.discussionId)
            .subscribe(function (success) {
            if (success) {
                _this.getComments();
            }
        }, function (err) {
            _this.errorHandler.handleError('Error deleting comment', err);
        });
    };
    return CommentListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], CommentListComponent.prototype, "discussionId", void 0);
CommentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comment-list',
        template: __webpack_require__("./src/app/components/discussion/comment/comment-list/comment-list.component.html"),
        styles: [__webpack_require__("./src/app/components/discussion/comment/comment-list/comment-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _c || Object])
], CommentListComponent);

var _a, _b, _c;
//# sourceMappingURL=comment-list.component.js.map

/***/ }),

/***/ "./src/app/components/discussion/discussion-create/discussion-create.component.css":
/***/ (function(module, exports) {

module.exports = ".title-field {\r\n    font-size: 20px;\r\n}"

/***/ }),

/***/ "./src/app/components/discussion/discussion-create/discussion-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form class=\"form\"\n          (ngSubmit)=\"createDiscussion(newDiscussionForm)\"\n          #newDiscussionForm=\"ngForm\">\n        <!-- Title -->\n        <div class=\"form-group\">\n            <input placeholder=\"Title\"\n                   type=\"text\"\n                   class=\"form-control form-control-lg title-field\"\n                   name=\"titleField\"\n                   [(ngModel)]=\"title\"\n                   #titleField=\"ngModel\"\n                   [ngClass]=\"{'border-danger': !titleField.valid && titleField.touched}\"\n                   required />\n            <span *ngIf=\"titleField.invalid && titleField.touched\"\n                  class=\"text-danger ml-2\">Title is required</span>\n        </div>\n\n        <!-- Description -->\n        <div class=\"form-group small\">\n            <textarea placeholder=\"Description\"\n                      rows=\"3\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"descriptionField\"\n                      [(ngModel)]=\"description\"\n                      #descriptionField=\"ngModel\"\n                      [ngClass]=\"{'border-danger': (!descriptionField.valid && descriptionField.touched)}\"> </textarea>\n            <span *ngIf=\"descriptionField.invalid && descriptionField.touched\"\n                  class=\"text-danger ml-2\">Description is required</span>\n        </div>\n\n        <!-- form actions -->\n        <div>\n            <button type=\"submit\"\n                    class=\"btn btn-sm btn-success mr-2\"\n                    [disabled]=\"newDiscussionForm.invalid\">Create Discussion</button>\n\n        </div>\n        <!-- /form actions -->\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/discussion/discussion-create/discussion-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussion_service__ = __webpack_require__("./src/app/services/discussion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscussionCreateComponent = (function () {
    function DiscussionCreateComponent(discussionService) {
        this.discussionService = discussionService;
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DiscussionCreateComponent.prototype.ngOnInit = function () {
    };
    DiscussionCreateComponent.prototype.createDiscussion = function (form) {
        var _this = this;
        var newDiscussion = {
            title: this.title,
            description: this.description || ''
        };
        this.discussionService.createDiscussion(newDiscussion)
            .subscribe(function (createdDiscussion) {
            form.resetForm();
            _this.onComplete.emit(createdDiscussion);
        });
    };
    return DiscussionCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], DiscussionCreateComponent.prototype, "onComplete", void 0);
DiscussionCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discussion-create',
        template: __webpack_require__("./src/app/components/discussion/discussion-create/discussion-create.component.html"),
        styles: [__webpack_require__("./src/app/components/discussion/discussion-create/discussion-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_discussion_service__["a" /* DiscussionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_discussion_service__["a" /* DiscussionService */]) === "function" && _b || Object])
], DiscussionCreateComponent);

var _a, _b;
//# sourceMappingURL=discussion-create.component.js.map

/***/ }),

/***/ "./src/app/components/discussion/discussion-edit/discussion-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/discussion/discussion-edit/discussion-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <form class=\"form\"\n          (ngSubmit)=\"updateDiscussion()\"\n          #newDiscussionForm=\"ngForm\">\n        <!-- Title -->\n        <div class=\"form-group\">\n            <input placeholder=\"Title\"\n                   type=\"text\"\n                   class=\"form-control form-control-lg title-field\"\n                   name=\"titleField\"\n                   [(ngModel)]=\"title\"\n                   #titleField=\"ngModel\"\n                   [ngClass]=\"{'border-danger': !titleField.valid && titleField.touched}\"\n                   required />\n            <span *ngIf=\"titleField.invalid && titleField.touched\"\n                  class=\"text-danger ml-2\">Title is required</span>\n        </div>\n\n        <!-- Description -->\n        <div class=\"form-group small\">\n            <textarea placeholder=\"Description\"\n                      rows=\"3\"\n                      type=\"text\"\n                      class=\"form-control\"\n                      name=\"descriptionField\"\n                      [(ngModel)]=\"description\"\n                      #descriptionField=\"ngModel\"\n                      [ngClass]=\"{'border-danger': (!descriptionField.valid && descriptionField.touched)}\"\n                      required> </textarea>\n            <span *ngIf=\"descriptionField.invalid && descriptionField.touched\"\n                  class=\"text-danger ml-2\">Description is required</span>\n        </div>\n\n        <!-- form actions -->\n        <div>\n            <button type=\"submit\"\n                    class=\"btn btn-sm btn-warning mr-2\"\n                    [disabled]=\"newDiscussionForm.invalid\">Edit Discussion</button>\n\n        </div>\n        <!-- /form actions -->\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/discussion/discussion-edit/discussion-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("./src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_discussion_service__ = __webpack_require__("./src/app/services/discussion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscussionEditComponent = (function () {
    function DiscussionEditComponent(discussionService, interactionService) {
        this.discussionService = discussionService;
        this.interactionService = interactionService;
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DiscussionEditComponent.prototype.ngOnInit = function () {
    };
    DiscussionEditComponent.prototype.ngOnChanges = function () {
        this.title = this.discussion.title;
        this.description = this.discussion.description;
    };
    DiscussionEditComponent.prototype.updateDiscussion = function () {
        var _this = this;
        this.discussion.title = this.title;
        this.discussion.description = this.description;
        this.discussionService.updateDiscussion(this.discussion)
            .subscribe(function (updatedDiscussion) {
            if (updatedDiscussion) {
                _this.onComplete.emit(updatedDiscussion);
            }
            else {
                _this.interactionService.showAlert('Unable to update discussion', 'danger');
            }
        });
    };
    return DiscussionEditComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], DiscussionEditComponent.prototype, "onComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["b" /* Discussion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["b" /* Discussion */]) === "function" && _b || Object)
], DiscussionEditComponent.prototype, "discussion", void 0);
DiscussionEditComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discussion-edit',
        template: __webpack_require__("./src/app/components/discussion/discussion-edit/discussion-edit.component.html"),
        styles: [__webpack_require__("./src/app/components/discussion/discussion-edit/discussion-edit.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_discussion_service__["a" /* DiscussionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_discussion_service__["a" /* DiscussionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__["a" /* InteractionService */]) === "function" && _d || Object])
], DiscussionEditComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=discussion-edit.component.js.map

/***/ }),

/***/ "./src/app/components/discussion/discussion-list/discussion-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/discussion/discussion-list/discussion-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group w-100 shadow-sm\">\n    <div class=\"list-group-item list-group-item-action\"\n         *ngFor=\"let thisDiscussion of discussions\"\n         [ngClass]=\"{'list-group-item-primary': selectedDiscussion=== thisDiscussion._id}\"\n         (click)=\"openDisucssion(thisDiscussion)\">\n\n        <div class=\"font-weight-bold\">\n            {{thisDiscussion.title}}\n        </div>\n        <div class=\"font-italic small mr-3\">\n            {{thisDiscussion.description.substring(0, 100)}} {{thisDiscussion.description.length > 100 ? '...' : ''}}\n        </div>\n        <div class=\"float-right small font-italic text-primary\">\n            @{{thisDiscussion.createdBy}}\n        </div>\n    </div>\n    <div class=\"text-muted font-italic text-center my-3 py-3\"\n         [hidden]=\"discussions && discussions.length > 0\">\n        <br><br><br><br> No discussions available. <br> Create a discussion to connect with experts and peers\n        <br><br><br><br>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/discussion/discussion-list/discussion-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscussionListComponent = (function () {
    function DiscussionListComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    DiscussionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.paramMap.subscribe(function (param) {
            _this.selectedDiscussion = param.get('discussionId');
        });
    };
    DiscussionListComponent.prototype.openDisucssion = function (discussion) {
        this.router.navigate(['/discussion', discussion._id]);
    };
    return DiscussionListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], DiscussionListComponent.prototype, "discussions", void 0);
DiscussionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discussion-list',
        template: __webpack_require__("./src/app/components/discussion/discussion-list/discussion-list.component.html"),
        styles: [__webpack_require__("./src/app/components/discussion/discussion-list/discussion-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], DiscussionListComponent);

var _a, _b;
//# sourceMappingURL=discussion-list.component.js.map

/***/ }),

/***/ "./src/app/components/discussion/discussion-view/discussion-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/discussion/discussion-view/discussion-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"discussion\">\n    <div class=\"scroll-container\"\n         appScreenHeight\n         [heightOffset]=\"20\">\n        <div class=\"text-primary small font-italic mb-2\">@{{discussion.createdBy}}</div>\n        <div class=\"h3\">\n            {{discussion.title}}\n        </div>\n\n        <div class=\"mt-2\">\n            {{discussion.description}}\n        </div>\n\n        <div class=\"mt-3 border border-bottom-0 border-left-0 border-right-0\">\n            <app-comment-list [discussionId]=\"discussion._id\"></app-comment-list>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/discussion/discussion-view/discussion-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("./src/app/model/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscussionViewComponent = (function () {
    function DiscussionViewComponent() {
    }
    DiscussionViewComponent.prototype.ngOnInit = function () {
    };
    return DiscussionViewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["b" /* Discussion */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["b" /* Discussion */]) === "function" && _a || Object)
], DiscussionViewComponent.prototype, "discussion", void 0);
DiscussionViewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discussion-view',
        template: __webpack_require__("./src/app/components/discussion/discussion-view/discussion-view.component.html"),
        styles: [__webpack_require__("./src/app/components/discussion/discussion-view/discussion-view.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DiscussionViewComponent);

var _a;
//# sourceMappingURL=discussion-view.component.js.map

/***/ }),

/***/ "./src/app/components/discussion/discussion.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/discussion/discussion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"discussions\">\n    <div class=\"row\">\n\n        <!-- left side bar -->\n        <div class=\"col-4\">\n            <div>\n                <h3 class=\"font-weight-light\">\n                    <i class=\"fas fa-comments mr-2\"></i>Discussions\n                    <div class=\"btn btn-sm btn-success float-right\"\n                         *ngIf=\"currentUser\"\n                         (click)=\"openCreateDiscussionModal()\">\n                        <i class=\"fas fa-plus\"></i> New\n                    </div>\n                </h3>\n            </div>\n            <div class=\"pt-2\">\n                <div class=\"scroll-container\"\n                     appScreenHeight\n                     [heightOffset]=\"-15\">\n                    <app-discussion-list [discussions]=\"discussions\"></app-discussion-list>\n                </div>\n            </div>\n        </div>\n\n        <!-- Main content -->\n        <div class=\"col border border-top-0 border-bottom-0 border-right-0\">\n            <div *ngIf=\"selectedDiscussion\">\n\n                <div class=\"float-right\"\n                     *ngIf=\"currentUser && (currentUser.userType === 'admin' || currentUser.username === selectedDiscussion.createdBy)\">\n                    <div class=\"btn btn-sm btn-outline-warning mr-1\"\n                         (click)=\"openEditDiscussionModal(selectedDiscussion)\">\n                        <i class=\"fas fa-edit mr-1\"></i> Edit\n                    </div>\n                    <div class=\"btn btn-sm btn-outline-danger\"\n                         [hidden]=\"deleteConfirmation\"\n                         (click)=\"deleteConfirmation=true\">\n                        <i class=\"fas fa-times mr-1\"></i> Delete\n                    </div>\n                    <div class=\"btn btn-sm btn-outline-danger\"\n                         [hidden]=\"!deleteConfirmation\"\n                         (click)=\"deleteDiscussion(selectedDiscussion)\">\n                        <i class=\"fas fa-times mr-1\"></i> Sure?\n                    </div>\n                </div>\n\n                <div class=\"mr-2\"\n                     appScreenHeight>\n                    <app-discussion-view [discussion]=\"selectedDiscussion\"></app-discussion-view>\n                </div>\n            </div>\n            <div [hidden]=\"selectedDiscussion\"\n                 class=\"text-center w-100 mt-3\">\n                <br><br><br>\n                <i class=\"fas fa-comments fa-9x\"></i>\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Create - Update modal -->\n    <div class=\"modal fade\"\n         id=\"createUpdateFundModal\">\n        <div class=\"modal-dialog\"\n             role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\">\n                        {{openModalTitle}} Discucssion\n                    </h5>\n                    <button type=\"button\"\n                            class=\"close\"\n                            data-dismiss=\"modal\"\n                            aria-label=\"Close\">\n                      <span aria-hidden=\"true\" class=\"small\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div *ngIf=\"openModalTitle == 'Create'\">\n                        <app-discussion-create (onComplete)=\"onDiscussionCreated($event)\"></app-discussion-create>\n                    </div>\n                    <div *ngIf=\"openModalTitle == 'Edit'\">\n                        <app-discussion-edit [discussion]=\"selectedDiscussion\"\n                                             (onComplete)=\"onDiscussionUpdated($event)\"></app-discussion-edit>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/discussion/discussion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_discussion_service__ = __webpack_require__("./src/app/services/discussion.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscussionComponent = (function () {
    function DiscussionComponent(activatedRoute, discussionService, interactionService, errorHandler, router, authService) {
        this.activatedRoute = activatedRoute;
        this.discussionService = discussionService;
        this.interactionService = interactionService;
        this.errorHandler = errorHandler;
        this.router = router;
        this.authService = authService;
    }
    DiscussionComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getLoggedInUser();
        this.getAllDiscussions();
    };
    DiscussionComponent.prototype.getAllDiscussions = function () {
        var _this = this;
        this.discussionService.getDiscussions()
            .subscribe(function (discussions) {
            _this.discussions = discussions;
            _this.activatedRoute.paramMap.subscribe(function (params) {
                var discussionId = params.get('discussionId');
                if (!discussionId) {
                    if (_this.discussions.length > 0) {
                        _this.router.navigate(['/discussion', _this.discussions[0]._id]);
                    }
                }
                else {
                    _this.deleteConfirmation = false;
                    _this.selectedDiscussion = _this.discussions.find(function (d) {
                        return d._id === discussionId;
                    });
                    if (!_this.selectedDiscussion) {
                        _this.interactionService.showAlert('Discusssion with id ' + discussionId + 'does not exist', 'danger');
                    }
                }
            });
        }, function (err) {
            _this.errorHandler.handleError('Error retrieving disucssions', err);
        });
    };
    DiscussionComponent.prototype.onDiscussionCreated = function (createdDiscussion) {
        $('#createUpdateFundModal').modal('hide');
        this.discussions.splice(0, 0, createdDiscussion);
        this.router.navigate(['/discussion/' + createdDiscussion._id]);
    };
    DiscussionComponent.prototype.onDiscussionUpdated = function (updatedDiscussion) {
        $('#createUpdateFundModal').modal('hide');
    };
    DiscussionComponent.prototype.openCreateDiscussionModal = function () {
        this.openModalTitle = 'Create';
        $('#createUpdateFundModal').modal('show');
    };
    DiscussionComponent.prototype.openEditDiscussionModal = function () {
        this.openModalTitle = 'Edit';
        $('#createUpdateFundModal').modal('show');
    };
    DiscussionComponent.prototype.deleteDiscussion = function (discussion) {
        var _this = this;
        this.discussionService.deleteDiscussion(discussion)
            .subscribe(function (deletedDiscussion) {
            _this.interactionService.showAlert('Discussion deleted successfully', 'success');
            _this.router.navigate(['/discussion']);
        }, function (err) {
            _this.errorHandler.handleError('Error deleting discussion', err);
        });
    };
    return DiscussionComponent;
}());
DiscussionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-discussion',
        template: __webpack_require__("./src/app/components/discussion/discussion.component.html"),
        styles: [__webpack_require__("./src/app/components/discussion/discussion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_discussion_service__["a" /* DiscussionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_discussion_service__["a" /* DiscussionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _f || Object])
], DiscussionComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=discussion.component.js.map

/***/ }),

/***/ "./src/app/components/fund/fund-buy-sell/fund-buy-sell.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/fund/fund-buy-sell/fund-buy-sell.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!portfolio\">Error: portfolio info needed</div>\n<div *ngIf=\"currency && portfolio\">\n    <div class=\"mb-3\">\n        <h2>\n            <i class=\"cc {{currency.symbol.toUpperCase()}}\"></i>\n            <span>{{currency.name}} </span>\n            <span>|</span>\n            <span class=\"text-monospace small text-dark font-weight-bold\">{{currency.symbol}}</span>\n        </h2>\n    </div>\n    <form class=\"form\"\n          (ngSubmit)=\"buyFund()\"\n          #buyForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\"\n                           for=\"quantity\">Quantity</label>\n                    <input type=\"number\"\n                           class=\"form-control py-1\"\n                           name=\"quantity\"\n                           [(ngModel)]=\"quantity\"\n                           (keyup)=\"quantityChanged($event)\"\n                           #quantityField=\"ngModel\"\n                           [ngClass]=\"{'btn-outline-danger': quantityField.touched && !quantityField.valid }\"\n                           required>\n                </div>\n            </div>\n            <div class=\"col\">\n                <div class=\"form-group\">\n                    <label class=\"control-label\"\n                           for=\"amount\">Amount ($)</label>\n                    <input type=\"text\"\n                           class=\"form-control py-1\"\n                           name=\"amount\"\n                           [(ngModel)]=\"amount\"\n                           (keyup)=\"amountChanged($event)\"\n                           #amountField=\"ngModel\"\n                           [ngClass]=\"{'btn-outline-danger': quantityField.touched && !quantityField.valid }\"\n                           required>\n                </div>\n            </div>\n        </div>\n        <div class=\"row mb-2\">\n            <div class=\"col small\">\n                <span class=\"label bg-danger text-light rounded py-1 px-2 mr-2\"\n                      *ngIf=\"error\">{{error}}</span>\n                <span class=\"font-italic\"> you will have <b class=\"text-success\">${{willHaveAmount.toFixed(2)}}</b> after this purchase </span>\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col\">\n                <button type=\"button\"\n                        [disabled]=\"error\"\n                        [hidden]=\"buyConfirmation\"\n                        (click)=\"buyConfirmation=(true && !error)\"\n                        class=\"btn btn-success btn-sm\">\n                        <span *ngIf=\"isSell\">\n                            <i class=\"fas fa-hand-holding-usd\"></i> Sell\n                        </span>\n                        <span *ngIf=\"!isSell\">\n                            <i class=\"fas fa-shopping-cart\"></i> Buy\n                        </span>\n                 \n                </button>\n                <button type=\"submit\"\n                        [hidden]=\"!buyConfirmation\"\n                        class=\"btn btn-success btn-sm\">\n                        <span *ngIf=\"isSell\">\n                            <i class=\"fas fa-hand-holding-usd\"></i> Confirm Sell\n                        </span>\n                        <span *ngIf=\"!isSell\">\n                            <i class=\"fas fa-shopping-cart\"></i> Confirm Buy\n                        </span>\n                </button>\n                <button type=\"button\"\n                        (click)=\"cancel()\"\n                        class=\"btn btn-outline-danger btn-sm float-right\">\n          Cancel\n        </button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/components/fund/fund-buy-sell/fund-buy-sell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundBuySellComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_model__ = __webpack_require__("./src/app/model/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_fund_service__ = __webpack_require__("./src/app/services/fund.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FundBuySellComponent = (function () {
    function FundBuySellComponent(fundService, errorHandler) {
        this.fundService = fundService;
        this.errorHandler = errorHandler;
        this.onComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.error = '';
        this.requestInProgress = false;
        this.buyConfirmation = false;
    }
    FundBuySellComponent.prototype.ngOnInit = function () {
    };
    FundBuySellComponent.prototype.ngOnChanges = function () {
        this.buyConfirmation = false;
        if (this.currency) {
            if (this.isSell) {
                this.quantity = this.sellFund.quantity;
            }
            else {
                this.quantity = 1;
            }
            this.amount = parseFloat(this.currency.value.toFixed(2));
            this.checkFundSufficient();
        }
    };
    FundBuySellComponent.prototype.amountChanged = function () {
        this.checkFundSufficient();
        this.quantity = parseFloat((this.amount / this.currency.value).toFixed(2));
    };
    FundBuySellComponent.prototype.quantityChanged = function () {
        this.checkFundSufficient();
        this.amount = parseFloat((this.currency.value * this.quantity).toFixed(2));
    };
    FundBuySellComponent.prototype.cancel = function () {
        this.onComplete.emit(null);
    };
    FundBuySellComponent.prototype.checkFundSufficient = function () {
        if (this.isSell) {
            this.willHaveAmount = this.portfolio.amount + this.amount;
        }
        else {
            this.willHaveAmount = this.portfolio.amount - this.amount;
        }
        this.error = '';
        if (!this.isSell && this.amount > this.portfolio.amount) {
            this.error = 'Insufficient funds';
            return false;
        }
        else if (this.quantity <= 0) {
            this.error = 'Quantity must be above 0';
            return false;
        }
        else if (this.amount < 0) {
            this.error = 'Amount cannot be less than $0';
            return false;
        }
        if (this.isSell) {
            if (this.quantity > this.sellFund.quantity) {
                this.error = 'You cannot sell more than what you have';
                return false;
            }
        }
        return true;
    };
    FundBuySellComponent.prototype.buyFund = function () {
        var _this = this;
        if (this.requestInProgress) {
            return;
        }
        this.error = '';
        if (!this.checkFundSufficient()) {
            return;
        }
        this.requestInProgress = true;
        var fund = {
            name: this.currency.id,
            quantity: this.quantity
        };
        if (this.isSell) {
            fund.quantity = -fund.quantity;
        }
        this.fundService.updateFund(this.portfolio, fund)
            .subscribe(function (result) {
            _this.onComplete.emit(result);
            _this.requestInProgress = false;
        }, function (err) {
            _this.requestInProgress = false;
            _this.errorHandler.handleError('Error buying fund', err);
        });
    };
    return FundBuySellComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["a" /* Currency */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["a" /* Currency */]) === "function" && _a || Object)
], FundBuySellComponent.prototype, "currency", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], FundBuySellComponent.prototype, "onComplete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Portfolio */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["d" /* Portfolio */]) === "function" && _c || Object)
], FundBuySellComponent.prototype, "portfolio", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FundBuySellComponent.prototype, "isSell", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* Fund */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_model__["c" /* Fund */]) === "function" && _d || Object)
], FundBuySellComponent.prototype, "sellFund", void 0);
FundBuySellComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fund-buy-sell',
        template: __webpack_require__("./src/app/components/fund/fund-buy-sell/fund-buy-sell.component.html"),
        styles: [__webpack_require__("./src/app/components/fund/fund-buy-sell/fund-buy-sell.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__services_fund_service__["a" /* FundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_fund_service__["a" /* FundService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _f || Object])
], FundBuySellComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=fund-buy-sell.component.js.map

/***/ }),

/***/ "./src/app/components/fund/fund-list/fund-list.component.css":
/***/ (function(module, exports) {

module.exports = ".cc {\r\n    font-size: 25px;\r\n}"

/***/ }),

/***/ "./src/app/components/fund/fund-list/fund-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"fund-list\"\n     *ngIf=\"funds && currencyMap\">\n    <div [hidden]=\"funds.length > 0\"\n         class=\"text-muted font-italic text-center mt-5\">\n        <i class=\"fab fa-bitcoin fa-7x\"></i> <br/><br/> You are not rich yet! <br/> Buy some crypto-currency! <br/>\n    </div>\n\n    <div class=\"scroll-container\"\n         appScreenHeight\n         heightOffset=\"-135\">\n        <div class=\"row no-gutters\">\n            <div *ngFor=\"let thisFund of funds\"\n                 class=\"col-4\">\n\n                <div class=\"card border shadow mx-2 mb-3\">\n\n                    <div class=\"card-header py-0 pr-2 mx-2 mt-1 bg-light border border-left-0 border-right-0 border-top-0\">\n\n                        <span class=\"mr-2\">{{currencyMap[thisFund.name].name}}</span>\n                        <i [ngClass]=\"['cc', currencyMap[thisFund.name].symbol.toUpperCase()]\"></i>\n                        <span class=\"badge badge-primary text-monospace py-1 ml-2 font-weight-bold float-right mt-2\">{{currencyMap[thisFund.name].symbol}}</span>\n\n                    </div>\n                    <div class=\"card-body text-dark px-2 pt-0 pb-2\">\n\n                        <div class=\"row text-center align-items-center\">\n                            <div class=\"col py-2 border border-top-0 border-bottom-0 border-left-0\">\n                                <h4 title=\"Quantity\">\n                                    <span> {{thisFund.quantity}}</span>\n                                </h4>\n                                <div class=\"text-muted small\"\n                                     title=\"Value per quantity\">\n                                    <i class=\"fas fa-dollar-sign\"></i> <span>{{currencyMap[thisFund.name].value.toFixed(2)}}</span>\n                                </div>\n                            </div>\n                            <div class=\"col font-weight-bold\">\n                                <div>\n                                    <i class=\"fas fa-dollar-sign\"></i> {{(thisFund.quantity * currencyMap[thisFund.name].value).toFixed(2)}}\n                                </div>\n                                <div class=\"btn-group btn-group-sm mt-2\">\n                                    <button class=\"btn btn-sm btn-outline-success\"\n                                            title=\"Buy\"\n                                            (click)=\"buyClick(thisFund)\">\n                                        <span>BUY</span>\n                            </button>\n                                    <button class=\"btn btn-sm btn-outline-danger\"\n                                            title=\"Sell\"\n                                            (click)=\"sellClick(thisFund)\"> <span>SELL</span>\n                            </button>\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/fund/fund-list/fund-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fund_service__ = __webpack_require__("./src/app/services/fund.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FundListComponent = (function () {
    function FundListComponent(fundService, currencyService) {
        this.fundService = fundService;
        this.currencyService = currencyService;
        this.onBuyClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.onSellClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    FundListComponent.prototype.ngOnInit = function () {
        // this.currencyService.getCurrency()
        //   .subscribe((currency) => {
        //     this.currencyMap = currency;
        //   });
    };
    FundListComponent.prototype.buyClick = function (fund) {
        this.onBuyClick.emit(this.currencyMap[fund.name]);
    };
    FundListComponent.prototype.sellClick = function (fund) {
        this.onSellClick.emit({ currency: this.currencyMap[fund.name], fund: fund });
    };
    return FundListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], FundListComponent.prototype, "funds", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], FundListComponent.prototype, "onBuyClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], FundListComponent.prototype, "onSellClick", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FundListComponent.prototype, "currencyMap", void 0);
FundListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fund-list',
        template: __webpack_require__("./src/app/components/fund/fund-list/fund-list.component.html"),
        styles: [__webpack_require__("./src/app/components/fund/fund-list/fund-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_fund_service__["a" /* FundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fund_service__["a" /* FundService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_currency_service__["a" /* CurrencyService */]) === "function" && _d || Object])
], FundListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=fund-list.component.js.map

/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\">\n        <div class=\"jumbotron h-100 mb-0\">\n            <h1 class=\"display-3\">$Crypto-lator</h1>\n            <p class=\"lead\">\n                The Cryptocurrency trading simulator\n            </p>\n            <hr class=\"my-4\">\n            <p>Start with $20,000 and trade cryptocurrency</p>\n            <p>No real money! It's all virtual</p>\n            <p class=\"lead\">\n                <a class=\"btn btn-sm mt-3 btn-primary btn-lg\"\n                   [routerLink]=\"['/login']\"\n                   role=\"button\">Login to start trading</a>\n            </p>\n        </div>\n    </div>\n    <div class=\"col-4\">\n        <app-currency-list (onSelect)=\"redirectToLogin($event)\"></app-currency-list>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var loggedInUser = this.authService.getLoggedInUser();
        if (loggedInUser) {
            this.router.navigate(['portfolio']);
        }
    };
    HomeComponent.prototype.redirectToLogin = function (currency) {
        localStorage.setItem('openBuyModal', currency.id);
        this.router.navigate(['login']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/components/home/home.component.html"),
        styles: [__webpack_require__("./src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/components/pipes/filter-currency.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterCurrencyPipe = (function () {
    function FilterCurrencyPipe() {
    }
    FilterCurrencyPipe.prototype.transform = function (items, filterText) {
        if (!items) {
            return [];
        }
        if (!filterText) {
            return items;
        }
        filterText = filterText.toLowerCase();
        return items.filter(function (i) {
            return i.name.toLowerCase().indexOf(filterText) > -1 || i.symbol.toLowerCase().indexOf(filterText) > -1;
        });
    };
    return FilterCurrencyPipe;
}());
FilterCurrencyPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'filterCurrency'
    })
], FilterCurrencyPipe);

//# sourceMappingURL=filter-currency.pipe.js.map

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ".portfolio-status {\r\n    -webkit-box-shadow: -1px 3px 8px -5px;\r\n            box-shadow: -1px 3px 8px -5px;\r\n}"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col\"\n         *ngIf=\"portfolio && currencyMap\">\n        <div class=\"row portfolio-status\">\n            <div class=\"col\">\n                <dt class=\"text-primary\">CASH</dt>\n                <dd>\n                    <i class=\"fas fa-dollar-sign fa-lg\"></i>\n                    <span>{{(portfolio.amount).toFixed(2)}}</span>\n                </dd>\n            </div>\n            <div class=\"col\">\n                <dt class=\"text-primary\">ASSETS</dt>\n                <dd>\n                    <i class=\"fab fa-bitcoin fa-lg\"></i>\n                    <span>{{(assets).toFixed(2)}}</span>\n                </dd>\n            </div>\n            <div class=\"col\">\n                <dt class=\"text-primary\">TOTAL</dt>\n                <dd>\n                    <i class=\"fas fa-dollar-sign fa-lg\"></i>\n                    <span>{{(portfolio.amount + assets).toFixed(2)}}</span>\n                </dd>\n            </div>\n        </div>\n\n        <!-- Fund list -->\n        <div class=\"mt-3 row\">\n            <app-fund-list class=\"w-100\"\n                           [funds]=\"funds\"\n                           [currencyMap]=\"currencyMap\"\n                           (onBuyClick)=\"showBuyModal($event)\"\n                           (onSellClick)=\"showSellModal($event)\"></app-fund-list>\n        </div>\n\n    </div>\n    <div class=\"col-4\">\n        <app-currency-list (onSelect)=\"showBuyModal($event)\"></app-currency-list>\n    </div>\n</div>\n\n<!-- Buy Sell funds modal -->\n<div class=\"modal fade\"\n     id=\"buySellFundModal\">\n    <div class=\"modal-dialog\"\n         role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">\n                    <span [hidden]=\"!isSell\">\n                      <i class=\"fas fa-hand-holding-usd\"></i> Sell Fund\n                  </span>\n                    <span [hidden]=\"isSell\">\n                      <i class=\"fas fa-shopping-cart\"></i> Buy Fund\n                  </span>\n                </h5>\n                <button type=\"button\"\n                        class=\"close\"\n                        data-dismiss=\"modal\"\n                        aria-label=\"Close\">\n            <span aria-hidden=\"true\" class=\"small\">&times;</span>\n          </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-fund-buy-sell [currency]=\"selectedCurrency\"\n                                   [portfolio]=\"portfolio\"\n                                   [isSell]=\"isSell\"\n                                   [sellFund]=\"sellFund\"\n                                   (onComplete)=\"closeBuyModal($event)\"></app-fund-buy-sell>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__ = __webpack_require__("./src/app/services/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_fund_service__ = __webpack_require__("./src/app/services/fund.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_currency_service__ = __webpack_require__("./src/app/services/currency.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PortfolioComponent = (function () {
    function PortfolioComponent(portfolioService, fundService, currencyService, authService, interactionService, activatedRoute) {
        this.portfolioService = portfolioService;
        this.fundService = fundService;
        this.currencyService = currencyService;
        this.authService = authService;
        this.interactionService = interactionService;
        this.activatedRoute = activatedRoute;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.assets = 0;
        this.openOnLoad = localStorage.getItem('openBuyModal');
        localStorage.removeItem('openBuyModal');
        this.loadPortfolio();
    };
    PortfolioComponent.prototype.loadPortfolio = function () {
        var _this = this;
        this.interactionService.showLoader(true);
        this.portfolioService.getPortfolio()
            .subscribe(function (portfolio) {
            _this.portfolio = portfolio;
            // get funds
            _this.fundService.getFunds(_this.portfolio)
                .subscribe(function (funds) {
                _this.funds = funds;
                _this.assets = 0.00;
                // get currency
                _this.currencyService.getCurrency()
                    .subscribe(function (currency) {
                    _this.currencyMap = currency;
                    _this.funds.forEach(function (i) {
                        _this.assets += i.quantity * currency[i.name].value;
                    });
                    _this.interactionService.showLoader(false);
                    if (_this.openOnLoad && currency[_this.openOnLoad]) {
                        _this.showBuyModal(currency[_this.openOnLoad]);
                    }
                }, function (err) {
                    console.log('Error getting currency info', err);
                });
            });
        });
    };
    PortfolioComponent.prototype.showBuyModal = function (currency) {
        this.selectedCurrency = currency;
        this.isSell = false;
        this.sellFund = null;
        $('#buySellFundModal').modal('show');
    };
    PortfolioComponent.prototype.showSellModal = function (sell) {
        this.selectedCurrency = sell.currency;
        this.isSell = true;
        this.sellFund = sell.fund;
        $('#buySellFundModal').modal('show');
    };
    PortfolioComponent.prototype.closeBuyModal = function (result) {
        $('#buySellFundModal').modal('hide');
        if (result) {
            this.loadPortfolio();
        }
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("./src/app/components/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("./src/app/components/portfolio/portfolio.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_fund_service__["a" /* FundService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_fund_service__["a" /* FundService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_currency_service__["a" /* CurrencyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_currency_service__["a" /* CurrencyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_interaction_service__["a" /* InteractionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]) === "function" && _f || Object])
], PortfolioComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "./src/app/components/shared/alert/alert.component.css":
/***/ (function(module, exports) {

module.exports = ".hvj-app-alert {\r\n    position: fixed;\r\n    z-index: 3000;\r\n    left: 20%;\r\n    right: 20%;\r\n}\r\n\r\n.hvj-app-alert .alert {\r\n    -webkit-box-shadow: 0 0 24px -7px black;\r\n            box-shadow: 0 0 24px -7px black;\r\n}\r\n\r\n.hvj-app-alert .alert .close {\r\n    margin-top: -3px;\r\n}\r\n\r\n.hvj-app-alert .alert-text span {\r\n    font-size: 80%;\r\n    font-weight: bold;\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/components/shared/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-app-alert\">\n\n    <div class=\"alert fade show pr-3\"\n         [hidden]=\"!alertVisible\"\n         [ngClass]=\"'alert-' + (alertType ? alertType : 'danger')\"\n         role=\"alert\">\n        <button type=\"button\"\n                class=\"close\"\n                (click)=\"alertVisible = false\">\n      \n        <i class=\"fas fa-times small\"></i>\n      \n    </button>\n\n        <div class=\"d-inline-block align-middle mr-3\">\n            <span *ngIf=\"alertType == 'danger'\">\n                    <i class=\"fas fa-times-circle fa-2x\"></i>                 \n            </span>\n            <span *ngIf=\"alertType == 'warning'\">\n                <i class=\"fas fa-exclamation-circle fa-2x\"></i>\n            </span>\n            <span *ngIf=\"alertType == 'success'\">\n            <i class=\"fas fa-check-circle fa-2x\"></i>\n            </span>\n        </div>\n        <div [innerHtml]=\"alertText\"\n             class=\"alert-text d-inline-block align-middle\"></div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/shared/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AlertComponent = (function () {
    function AlertComponent(sce, interactionService) {
        this.sce = sce;
        this.interactionService = interactionService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertVisible = false;
        this.interactionService.registerCallback(__WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* AppConstants */].EVENTS.showAlert, function (d) { _this.showAlert(d); });
        this.interactionService.registerCallback(__WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* AppConstants */].EVENTS.hideAlert, function () { _this.hideAlert(); });
    };
    /**
     * show alert on page
     * @param data alert data
     */
    AlertComponent.prototype.showAlert = function (data) {
        var _this = this;
        if (data.text) {
            this.alertText = this.sce.bypassSecurityTrustHtml(data.text);
            this.alertType = data.type || 'danger';
            this.alertVisible = true;
            if (data.autoClose) {
                setTimeout(function () {
                    _this.alertVisible = false;
                }, 3000);
            }
        }
    };
    /** Hide alert */
    AlertComponent.prototype.hideAlert = function () {
        this.alertVisible = false;
        this.alertType = '';
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert',
        template: __webpack_require__("./src/app/components/shared/alert/alert.component.html"),
        styles: [__webpack_require__("./src/app/components/shared/alert/alert.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_interaction_service__["a" /* InteractionService */]) === "function" && _b || Object])
], AlertComponent);

var _a, _b;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".hvj-loader {\r\n    position: fixed;\r\n    left: 0;\r\n    right: 0;\r\n    top: 50%;\r\n}\r\n\r\n.hvj-loader .loader-mask {\r\n    background: #000;\r\n    opacity: 0.6;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n}\r\n\r\n.hvj-loader .loader-img {\r\n    position: relative;\r\n}"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"hvj-loader text-center\"\n     *ngIf=\"showLoader\">\n    <div class=\"loader-mask\"></div>\n</div>"

/***/ }),

/***/ "./src/app/components/shared/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderComponent = (function () {
    function LoaderComponent(interactionService) {
        this.interactionService = interactionService;
        // properties
        this.showLoader = false;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interactionService.registerCallback(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].EVENTS.showLoader, function (d) { _this.toggleLoader(d); });
    };
    /**
     * Show / hide loader
     * @param val true to show, false to hide
     */
    LoaderComponent.prototype.toggleLoader = function (val) {
        this.showLoader = val;
    };
    return LoaderComponent;
}());
LoaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-loader',
        template: __webpack_require__("./src/app/components/shared/loader/loader.component.html"),
        styles: [__webpack_require__("./src/app/components/shared/loader/loader.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], LoaderComponent);

var _a;
//# sourceMappingURL=loader.component.js.map

/***/ }),

/***/ "./src/app/components/shared/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Nav bar -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light py-0 sticky-top border border-top-0 border-left-0 border-right-0 border-primary\">\n    <a class=\"navbar-brand font-weight-light\"\n       href=\"#\">$Crypto-lator</a>\n    <button class=\"navbar-toggler\"\n            type=\"button\"\n            data-target=\"#navbarContent\"\n            data-toggle=\"collapse\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n    <div class=\"collapse navbar-collapse\"\n         id=\"navbarContent\">\n        <ul class=\"navbar-nav ml-3 mr-auto\">\n            <li class=\"nav-item mx-3\">\n                <a class=\"nav-link\"\n                   [routerLink]=\"['/portfolio']\">Portfolio <span class=\"sr-only\"></span></a>\n            </li>\n            <li class=\"nav-item mx-3\">\n                <a class=\"nav-link\"\n                   [routerLink]=\"['/profile']\">Profile</a>\n            </li>\n            <li class=\"nav-item mx-3\">\n                <a class=\"nav-link\"\n                   [routerLink]=\"['/discussion']\">Discussions</a>\n            </li>\n            <li class=\"nav-item mx-3\"\n                *ngIf=\"loggedIn && loggedIn.userType === 'admin'\">\n                <a class=\"nav-link btn-outline-warning\"\n                   [routerLink]=\"['/admin']\"> <i class=\"fas fa-bolt fa-lg mr-1\"></i> Admin</a>\n            </li>\n            <li class=\"nav-item mx-3\"\n                [hidden]=\"!showLoader\">\n                <svg class=\"mt-1\"\n                     xmlns:svg=\"http://www.w3.org/2000/svg\"\n                     xmlns=\"http://www.w3.org/2000/svg\"\n                     xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n                     version=\"1.0\"\n                     width=\"37px\"\n                     height=\"37px\"\n                     viewBox=\"0 0 128 128\"\n                     xml:space=\"preserve\"><g><circle cx=\"16\" cy=\"64\" r=\"16\" fill=\"#2196f3\" fill-opacity=\"1\"/><circle cx=\"16\" cy=\"64\" r=\"14.344\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(45 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"12.531\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(90 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.75\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(135 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"10.063\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(180 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"8.063\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(225 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"6.438\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(270 64 64)\"/><circle cx=\"16\" cy=\"64\" r=\"5.375\" fill=\"#2196f3\" fill-opacity=\"1\" transform=\"rotate(315 64 64)\"/><animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64\" calcMode=\"discrete\" dur=\"640ms\" repeatCount=\"indefinite\"></animateTransform></g></svg>\n            </li>\n        </ul>\n\n        <ul class=\"navbar-nav form-inline ml-auto\"\n            *ngIf=\"!loggedIn\">\n            <li class=\"nav-item mx-2\">\n                <a class=\"btn btn-sm btn-primary\"\n                   [routerLink]=\"['/login']\">Login</a>\n            </li>\n\n            <li class=\"nav-item mx-2\">\n                <a class=\"btn btn-sm btn-primary\"\n                   [routerLink]=\"['/register']\">Register</a>\n            </li>\n\n        </ul>\n\n        <ul class=\"navbar-nav form-inline ml-auto\"\n            *ngIf=\"loggedIn\">\n\n            <li class=\"nav-item mr-1\">\n                <i *ngIf=\"loggedIn.userType==='user'\"\n                   class=\"fas fa-user-circle fa-3x py-1 text-muted\"></i>\n                <i *ngIf=\"loggedIn.userType==='expert'\"\n                   class=\"fas fa-street-view fa-3x py-1 text-success\"></i>\n                <i *ngIf=\"loggedIn.userType==='admin'\"\n                   class=\"fas fa-bolt fa-3x py-1 text-warning\"></i>\n            </li>\n            <li class=\"nav-item mr-3\">\n                <div>\n                    {{loggedIn.name}}\n                </div>\n                <div class=\"text-primary font-italic small\">\n                    @{{loggedIn.username}}\n                </div>\n            </li>\n\n            <li class=\"nav-item mx-2\">\n                <span class=\"btn btn-sm btn-primary\"\n                      (click)=\"logout()\">Logout</span>\n            </li>\n        </ul>\n\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/shared/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(interactionService, authService) {
        this.interactionService = interactionService;
        this.authService = authService;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoader = false;
        this.interactionService.registerCallback(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].EVENTS.showLoader, function (d) { _this.toggleLoader(d); });
        // register for login change
        this.interactionService.registerCallback(__WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].EVENTS.loginChange, function (user) {
            if (user) {
                _this.loggedIn = user;
            }
            else {
                _this.loggedIn = null;
            }
        });
        this.authService.checkLoggedIn(true)
            .subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.loggedIn = _this.authService.getLoggedInUser();
            }
        }, function (err) {
            console.error('Error checking user login status', err);
            _this.loggedIn = null;
        });
    };
    NavComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavComponent.prototype.toggleLoader = function (val) {
        this.showLoader = val;
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("./src/app/components/shared/nav/nav.component.html"),
        styles: [__webpack_require__("./src/app/components/shared/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_interaction_service__["a" /* InteractionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"user-registration col-8 m-auto mt-3\">\n        <h1>Login</h1>\n        <hr>\n        <br>\n        <!--form-->\n        <form class=\"form\"\n              (ngSubmit)=\"login()\"\n              #loginForm=\"ngForm\">\n            <!-- User Name -->\n            <div class=\"form-group\">\n                <input placeholder=\"User Name\"\n                       type=\"text\"\n                       class=\"form-control form-control-sm\"\n                       name=\"usernameField\"\n                       [(ngModel)]=\"username\"\n                       #usernameField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': !usernameField.valid && usernameField.touched}\"\n                       required />\n                <span *ngIf=\"usernameField.invalid && usernameField.touched\"\n                      class=\"text-danger ml-2\">Username is required</span>\n            </div>\n\n            <!-- Password -->\n            <div class=\"form-group\">\n                <input placeholder=\"Password\"\n                       type=\"password\"\n                       class=\"form-control form-control-sm\"\n                       name=\"passwordField\"\n                       [(ngModel)]=\"password\"\n                       #passwordField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': (!passwordField.valid && passwordField.touched)}\"\n                       required />\n                <span *ngIf=\"passwordField.invalid && passwordField.touched\"\n                      class=\"text-danger ml-2\">Password is required</span>\n            </div>\n\n            <!-- form actions -->\n            <div>\n                <button type=\"submit\"\n                        class=\"btn btn-sm btn-primary mr-2\"\n                        [disabled]=\"loginForm.invalid\">Login</button>\n                <a [routerLink]=\"['/register']\"\n                   class=\"btn btn-sm btn-secondary\">Register</a>\n\n            </div>\n            <!-- /form actions -->\n        </form>\n        <!--/form-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(userService, router, activatedRoute, authService, interactionService, errorHanderService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.interactionService = interactionService;
        this.errorHanderService = errorHanderService;
        this.activatedRoute.queryParamMap.subscribe(function (params) {
            _this.redirectTo = params.get('next');
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    /** Login User */
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.interactionService.hideAlert();
        this.interactionService.showLoader(true);
        this.authService.login(this.username, this.password)
            .subscribe(function (usr) {
            _this.interactionService.showLoader(false);
            if (_this.redirectTo) {
                _this.router.navigateByUrl(_this.redirectTo);
            }
            else {
                _this.router.navigate(['/portfolio']);
            }
        }, function (err) {
            if (err.status === 401) {
                _this.interactionService.showLoader(false);
                _this.interactionService.showAlert('Login failed. Please check username and password and try again');
            }
            else {
                _this.errorHanderService.handleError('Login Failed', err);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/components/user/login/login.component.html"),
        styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__["a" /* InteractionService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _f || Object])
], LoginComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"pt-4 w-75 m-auto\"\n         *ngIf=\"currentUser\">\n        <div>\n            <div class=\"float-left mr-3\">\n                <i *ngIf=\"currentUser.userType === 'user'\"\n                   class=\"text-muted fa fa-user-circle fa-4x\"></i>\n                <i *ngIf=\"currentUser.userType === 'expert'\"\n                   class=\"text-success fa fa-street-view fa-4x\"></i>\n                <i *ngIf=\"currentUser.userType === 'admin'\"\n                   class=\"text-warning fa fa-bolt fa-4x\"></i>\n            </div>\n            <div class=\"ml-5\">\n                <h3 class=\"text-primary\">\n                    @{{currentUser.username}}\n                </h3>\n                <div *ngIf=\"currentUser.userType === 'expert'\"\n                     class=\"text-success small ml-4\"> [ EXPERT ]\n                </div>\n                <div *ngIf=\"currentUser.userType === 'admin'\"\n                     class=\"text-warning small ml-4\"> [ ADMIN ]\n                </div>\n            </div>\n\n        </div>\n        <hr>\n        <!--form-->\n        <form class=\"form\"\n              (ngSubmit)=\"updateUser()\"\n              #profileForm=\"ngForm\">\n\n            <!-- Name -->\n            <div class=\"form-group\">\n                <label class=\"control-label text-dark\"\n                       for=\"name\">NAME</label>\n                <input placeholder=\"Name\"\n                       type=\"text\"\n                       class=\"form-control form-control-sm py-1\"\n                       name=\"nameField\"\n                       [(ngModel)]=\"name\"\n                       #nameField=\"ngModel\" />\n            </div>\n\n            <div class=\"row pt-2\">\n                <!-- Password -->\n                <div class=\"form-group col-sm-6 col-12\">\n                    <label class=\"control-label text-dark\"\n                           for=\"password\">PASSWORD</label>\n                    <input placeholder=\"*****\"\n                           type=\"password\"\n                           class=\"form-control form-control-sm py-1\"\n                           name=\"passwordField\"\n                           [(ngModel)]=\"password\"\n                           #passwordField=\"ngModel\" />\n                </div>\n\n                <!-- Verify Password -->\n                <div class=\"form-group col-sm-6 col-12\">\n                    <label class=\"control-label text-dark\"\n                           for=\"name\">CONFIRM PASSWORD</label>\n                    <input placeholder=\"******\"\n                           type=\"password\"\n                           class=\"form-control form-control-sm py-1\"\n                           name=\"confirmPasswordField\"\n                           [(ngModel)]=\"confirmPassword\"\n                           #confirmPasswordField=\"ngModel\" />\n                    <span *ngIf=\"confirmPassword && confirmPassword !== password && confirmPasswordField.touched\"\n                          class=\"text-danger ml-2 small\">Passwords do not match</span>\n                </div>\n\n            </div>\n\n            <!-- Email -->\n            <div class=\"form-group pt-2\">\n                <label class=\"control-label text-dark\"\n                       for=\"name\">EMAIL</label>\n                <input placeholder=\"Email\"\n                       type=\"text\"\n                       class=\"form-control form-control-sm py-1\"\n                       name=\"emailField\"\n                       [(ngModel)]=\"email\"\n                       #emailField=\"ngModel\" />\n            </div>\n\n            <!-- form actions -->\n            <div>\n                <button type=\"submit\"\n                        class=\"btn btn-sm btn-primary py-1\"\n                        [disabled]=\"profileForm.invalid || profileForm.untouched || confirmPassword !== password\">Save</button>\n            </div>\n            <!-- /form actions -->\n        </form>\n        <!--/form-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = (function () {
    function ProfileComponent(userService, authService, errorHandler, interactionService) {
        this.userService = userService;
        this.authService = authService;
        this.errorHandler = errorHandler;
        this.interactionService = interactionService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getLoggedInUser();
        this.name = this.currentUser.name;
        this.password = '';
        this.confirmPassword = '';
        this.email = this.currentUser.email;
    };
    ProfileComponent.prototype.updateUser = function () {
        var _this = this;
        if (this.password) {
            this.currentUser.password = this.password;
        }
        else {
            this.currentUser.password = null;
        }
        this.currentUser.name = this.name;
        this.currentUser.email = this.email;
        this.interactionService.showLoader(true);
        this.userService.updateUser(this.currentUser._id, this.currentUser)
            .subscribe(function (updatedUser) {
            _this.interactionService.showLoader(false);
            _this.authService.setLoggedInUser(updatedUser);
            _this.interactionService.invoke(__WEBPACK_IMPORTED_MODULE_4__app_constants__["a" /* AppConstants */].EVENTS.loginChange, updatedUser);
            _this.interactionService.showAlert('Changes saved successfully', 'success', true);
        }, function (err) {
            _this.errorHandler.handleError('Error saving changes', err);
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
        styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_interaction_service__["a" /* InteractionService */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"user-registration mt-3\">\n        <h3>Register</h3>\n        <hr>\n        <br>\n        <!--form-->\n        <form class=\"form\"\n              (ngSubmit)=\"register()\"\n              #registerForm=\"ngForm\">\n            <!-- User Name -->\n            <div class=\"form-group\">\n                <input placeholder=\"User Name\"\n                       type=\"text\"\n                       class=\"form-control form-control-sm\"\n                       name=\"usernameField\"\n                       [(ngModel)]=\"username\"\n                       #usernameField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': registrationErrors.username || (!usernameField.valid && usernameField.touched)}\"\n                       required />\n                <span *ngIf=\"usernameField.invalid && usernameField.touched\"\n                      class=\"text-danger ml-2\">Username is required</span>\n                <span *ngIf=\"registrationErrors.username\"\n                      class=\"text-danger ml-2\">{{registrationErrors.username}}</span>\n            </div>\n\n            <!-- Password -->\n            <div class=\"form-group\">\n                <input placeholder=\"Password\"\n                       type=\"password\"\n                       class=\"form-control form-control-sm\"\n                       name=\"passwordField\"\n                       [(ngModel)]=\"password\"\n                       #passwordField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': (!passwordField.valid && passwordField.touched)}\"\n                       required />\n                <span *ngIf=\"passwordField.invalid && passwordField.touched\"\n                      class=\"text-danger ml-2\">Password is required</span>\n            </div>\n\n            <!-- Verify Password -->\n            <div class=\"form-group\">\n                <input placeholder=\"Verify Password\"\n                       type=\"password\"\n                       class=\"form-control form-control-sm\"\n                       name=\"verifyPasswordField\"\n                       [(ngModel)]=\"verifyPassword\"\n                       #verifyPasswordField=\"ngModel\"\n                       [ngClass]=\"{'border-danger': verifyPassword !== password && verifyPasswordField.touched}\"\n                       required />\n                <span *ngIf=\"verifyPasswordField.invalid && verifyPasswordField.touched\"\n                      class=\"text-danger ml-2\">Verify Password is required</span>\n                <span *ngIf=\"verifyPassword && verifyPassword !== password && verifyPasswordField.touched\"\n                      class=\"text-danger ml-2\">Passwords do not match</span>\n            </div>\n\n            <!-- form actions -->\n            <div>\n                <button type=\"submit\"\n                        class=\"btn btn-sm btn-primary\"\n                        [disabled]=\"registerForm.invalid || verifyPassword !== password\">Register</button>\n            </div>\n            <!-- /form actions -->\n        </form>\n        <!--/form-->\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_model__ = __webpack_require__("./src/app/model/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(userService, router, authService, interactionsService, errorHanderService) {
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.interactionsService = interactionsService;
        this.errorHanderService = errorHanderService;
        this.registrationErrors = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var newUser = new __WEBPACK_IMPORTED_MODULE_6__model_model__["e" /* User */]();
        newUser.username = this.username;
        newUser.password = this.password;
        // create new user
        this.interactionsService.showLoader(true);
        this.userService.register(this.username, this.password)
            .subscribe(function (registeredUser) {
            if (registeredUser) {
                _this.authService.setLoggedInUser(registeredUser);
                _this.interactionsService.showLoader(false);
                console.log(registeredUser);
                _this.router.navigate(['/portfolio']);
            }
            else {
                _this.interactionsService.showAlert('Registration unsuccessful! <br/> Server returned empty user object');
            }
        }, function (err) {
            _this.errorHanderService.handleError('Error registering user', err);
            _this.interactionsService.showLoader(false);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("./src/app/components/user/register/register.component.html"),
        styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_interaction_service__["a" /* InteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "./src/app/directives/screen-height.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScreenHeightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenHeightDirective = (function () {
    function ScreenHeightDirective(el) {
        this.el = el;
    }
    ScreenHeightDirective.prototype.ngOnInit = function () {
        if (this.heightOffset === undefined) {
            this.heightOffset = 0;
        }
        this.el.nativeElement.style.height = (window.innerHeight - 105 + this.heightOffset) + 'px';
    };
    return ScreenHeightDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], ScreenHeightDirective.prototype, "heightOffset", void 0);
ScreenHeightDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appScreenHeight]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], ScreenHeightDirective);

var _a;
//# sourceMappingURL=screen-height.directive.js.map

/***/ }),

/***/ "./src/app/model/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Portfolio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Fund; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Discussion; });
/* unused harmony export Comment */
/** Models a User object */
var User = (function () {
    function User() {
    }
    return User;
}());

var Portfolio = (function () {
    function Portfolio() {
    }
    return Portfolio;
}());

var Fund = (function () {
    function Fund() {
    }
    return Fund;
}());

var Currency = (function () {
    function Currency() {
    }
    return Currency;
}());

var Discussion = (function () {
    function Discussion() {
    }
    return Discussion;
}());

var Comment = (function () {
    function Comment() {
    }
    return Comment;
}());

//# sourceMappingURL=model.js.map

/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_handler_service__ = __webpack_require__("./src/app/services/error-handler.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function () {
    function AuthService(router, activatedRouter, userService, interactionService, errorHandlerService) {
        this.router = router;
        this.activatedRouter = activatedRouter;
        this.userService = userService;
        this.interactionService = interactionService;
        this.errorHandlerService = errorHandlerService;
        this.api = {
            'getLoggedInUser': this.getLoggedInUser,
            'setLoggedInUser': this.setLoggedInUser,
            'login': this.login,
            'logout': this.logout
        };
    }
    AuthService.prototype.canActivate = function (route, state) {
        return this.checkLoggedIn(false, state.url);
    };
    /**
     * Check if user is logged in
     * @returns logged in user object; null, if user is not logged in
     */
    AuthService.prototype.getLoggedInUser = function () {
        this.loggedInUser = this.loggedInUser || JSON.parse(localStorage.getItem('loggedInUser'));
        if (this.loggedInUser) {
            return Object.assign({}, this.loggedInUser);
        }
        else {
            return null;
        }
    };
    /** Set user as logged in user */
    AuthService.prototype.setLoggedInUser = function (user) {
        this.loggedInUser = user;
        localStorage.setItem('loggedInUser', JSON.stringify(this.loggedInUser));
        this.interactionService.invoke(__WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* AppConstants */].EVENTS.loginChange, Object.assign({}, this.loggedInUser));
    };
    /** Remove logged in user */
    AuthService.prototype.removeLoggedInUser = function () {
        this.loggedInUser = null;
        localStorage.removeItem('loggedInUser');
        this.interactionService.invoke(__WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* AppConstants */].EVENTS.loginChange, null);
    };
    /**
     * Login user
     * @param username username
     * @param password password
     * @returns logged in user; null if login fails
     */
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.userService.login(username, password)
                .subscribe(function (loggedInUser) {
                _this.interactionService.invoke(__WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* AppConstants */].EVENTS.loginChange);
                _this.setLoggedInUser(loggedInUser);
                observer.next(Object.assign({}, loggedInUser));
                observer.complete();
            }, function (err) {
                _this.removeLoggedInUser();
                observer.error(err);
            });
        });
        return obs;
    };
    /**
     * Check if user is logged in
     * @param disableRedirect true, if redirect to login page must be disabled
     * @param accessedRoute route that was tried to be accessed
     * @returns subscription that resolves to true if the user is logged in, false otherwise
     */
    AuthService.prototype.checkLoggedIn = function (disableRedirect, accessedRoute) {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.userService.loggedIn()
                .subscribe(function (res) {
                if (res) {
                    _this.setLoggedInUser(res);
                    observer.next(true);
                    observer.complete();
                }
                else {
                    _this.removeLoggedInUser();
                    if (!disableRedirect) {
                        _this.interactionService.showAlert('Login to continue', 'warning', true);
                        _this.router.navigate(['/login'], { queryParams: { next: accessedRoute } });
                    }
                    observer.next(false);
                    observer.complete();
                }
            }, function (err) {
                console.error('Error checking login status', err);
                _this.removeLoggedInUser();
                observer.next(false);
                observer.complete();
            });
        });
        return obs;
    };
    /**
     * Logout user
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        this.interactionService.showLoader(true);
        this.removeLoggedInUser();
        this.userService.logout()
            .subscribe(function (res) {
            _this.interactionService.showLoader(false);
            _this.interactionService.showAlert('You have been logged out successfully', 'success', true);
            _this.router.navigate(['/']);
        }, function (err) {
            console.log(err);
            _this.errorHandlerService.handleError('Oops! Strange! Can\'t log you out!', err);
            _this.router.navigate(['/']);
        });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__interaction_service__["a" /* InteractionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__error_handler_service__["a" /* ErrorHandlerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__error_handler_service__["a" /* ErrorHandlerService */]) === "function" && _e || Object])
], AuthService);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.endpoint = {
            'getComments': __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions/{discussionId}/comments',
            'createComment': __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions/{discussionId}/comments',
            'updateComment': __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions/{discussionId}/comments/{commentId}',
            'deleteComment': __WEBPACK_IMPORTED_MODULE_3__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions/{discussionId}/comments/{commentId}',
        };
    }
    CommentService.prototype.getComments = function (discussionId) {
        var _this = this;
        var url = this.endpoint.getComments.replace('{discussionId}', discussionId);
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.http.get(url, { withCredentials: true })
                .subscribe(function (comments) {
                comments.forEach(function (c) {
                    if (c.dateCreated) {
                        c.dateCreated = new Date(c.dateCreated);
                    }
                });
                observer.next(comments);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return obs;
    };
    CommentService.prototype.createComment = function (comment, discussionId) {
        var _this = this;
        var url = this.endpoint.createComment.replace('{discussionId}', discussionId);
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.http.post(url, comment, { withCredentials: true })
                .subscribe(function (createdComment) {
                if (createdComment.dateCreated) {
                    createdComment.dateCreated = new Date(createdComment.dateCreated);
                }
                observer.next(createdComment);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return obs;
    };
    CommentService.prototype.updateComment = function (comment, discussionId) {
        var _this = this;
        var url = this.endpoint.createComment
            .replace('{discussionId}', discussionId)
            .replace('{commentId}', comment._id);
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            _this.http.put(url, comment, { withCredentials: true })
                .subscribe(function (updatedComment) {
                if (updatedComment.dateCreated) {
                    updatedComment.dateCreated = new Date(updatedComment.dateCreated);
                }
                observer.next(updatedComment);
                observer.complete();
            }, function (err) {
                observer.error(err);
            });
        });
        return obs;
    };
    CommentService.prototype.deleteComment = function (comment, discussionId) {
        var url = this.endpoint.deleteComment
            .replace('{discussionId}', discussionId)
            .replace('{commentId}', comment._id);
        return this.http.delete(url, { withCredentials: true });
    };
    return CommentService;
}());
CommentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CommentService);

var _a;
//# sourceMappingURL=comment.service.js.map

/***/ }),

/***/ "./src/app/services/currency.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyService = (function () {
    function CurrencyService(http) {
        this.http = http;
        this.endpoint = {
            'getCurrency': 'https://api.coinmarketcap.com/v1/ticker/'
        };
        // local cache
        this.currency = {};
    }
    CurrencyService.prototype.getCurrency = function () {
        var _this = this;
        var obs = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */](function (observer) {
            // check if data is availabe in local storage
            var cached = localStorage.getItem('cachedCurrency');
            if (cached) {
                cached = JSON.parse(cached);
                cached.setAt = new Date(cached.setAt);
                var now = new Date();
                if (now - cached.setAt > 1000 * 60 * 5) {
                    localStorage.removeItem('cachedCurrency');
                }
                else {
                    console.log('currency data loaded from cache');
                    _this.currency = cached.currency;
                }
            }
            if (Object.values(_this.currency).length > 0) {
                observer.next(_this.currency);
                observer.complete();
            }
            else {
                _this.http.get(_this.endpoint.getCurrency)
                    .subscribe(function (result) {
                    result.forEach(function (i) {
                        _this.currency[i.id] = {
                            id: i.id,
                            name: i.name,
                            symbol: i.symbol,
                            value: parseFloat(i.price_usd),
                            rank: parseInt(i.rank, 10)
                        };
                    });
                    localStorage.setItem('cachedCurrency', JSON.stringify({
                        setAt: new Date(),
                        currency: _this.currency
                    }));
                    observer.next(_this.currency);
                    observer.complete();
                }, function (err) {
                    observer.error(err);
                });
            }
        });
        return obs;
    };
    return CurrencyService;
}());
CurrencyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], CurrencyService);

var _a;
//# sourceMappingURL=currency.service.js.map

/***/ }),

/***/ "./src/app/services/discussion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscussionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscussionService = (function () {
    function DiscussionService(http) {
        this.http = http;
        this.endpoint = {
            'getDiscussions': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions',
            'createDiscussion': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions',
            'updateDiscussion': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions/{discussionId}',
            'deleteDiscussion': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/discussions/{discussionId}',
        };
    }
    DiscussionService.prototype.getDiscussions = function () {
        return this.http.get(this.endpoint.getDiscussions, { withCredentials: true });
    };
    DiscussionService.prototype.createDiscussion = function (discussion) {
        return this.http.post(this.endpoint.createDiscussion, discussion, { withCredentials: true });
    };
    DiscussionService.prototype.updateDiscussion = function (discussion) {
        var url = this.endpoint.updateDiscussion.replace('{discussionId}', discussion._id);
        return this.http.put(url, discussion, { withCredentials: true });
    };
    DiscussionService.prototype.deleteDiscussion = function (discussion) {
        var url = this.endpoint.deleteDiscussion.replace('{discussionId}', discussion._id);
        return this.http.delete(url, { withCredentials: true });
    };
    return DiscussionService;
}());
DiscussionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], DiscussionService);

var _a;
//# sourceMappingURL=discussion.service.js.map

/***/ }),

/***/ "./src/app/services/error-handler.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorHandlerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interaction_service__ = __webpack_require__("./src/app/services/interaction.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorHandlerService = (function () {
    function ErrorHandlerService(interactionService) {
        this.interactionService = interactionService;
    }
    /**
     * Get friendly error messag from error
     * @param err Error object
     */
    ErrorHandlerService.prototype.getErrorMessage = function (err) {
        if (err instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            return err.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            var errText = '';
            try {
                if (err.error instanceof Array) {
                    errText = err.error.join('<br/>');
                }
                else {
                    errText = err.error.toString();
                }
            }
            catch (ex) {
                errText = "code: " + err.status + " | error: " + err.message;
            }
            return errText;
        }
    };
    /**
     * Handle error
     * @param contextMessage Message regardin the context where the error occured
     * @param err Error object
     * @param autoHide true, to autohide alert error popup
     */
    ErrorHandlerService.prototype.handleError = function (contextMessage, err, autoHide) {
        console.error(contextMessage, err);
        var errMessage = this.getErrorMessage(err);
        var alertText = contextMessage + " </br> <span> " + errMessage + " </span>";
        this.interactionService.showAlert(alertText, 'danger', autoHide);
        this.interactionService.showLoader(false);
    };
    return ErrorHandlerService;
}());
ErrorHandlerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interaction_service__["a" /* InteractionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interaction_service__["a" /* InteractionService */]) === "function" && _a || Object])
], ErrorHandlerService);

var _a;
//# sourceMappingURL=error-handler.service.js.map

/***/ }),

/***/ "./src/app/services/fund.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FundService = (function () {
    function FundService(http) {
        this.http = http;
        this.endpoint = {
            'getFunds': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/portfolio/{portfolioId}/funds',
            'updateFund': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/portfolio/{portfolioId}/funds/update',
        };
    }
    FundService.prototype.getFunds = function (portfolio) {
        var url = this.endpoint.getFunds.replace('{portfolioId}', portfolio._id);
        return this.http.get(url, { withCredentials: true });
    };
    FundService.prototype.updateFund = function (portfolio, fund) {
        var url = this.endpoint.updateFund.replace('{portfolioId}', portfolio._id);
        return this.http.post(url, fund, { withCredentials: true });
    };
    return FundService;
}());
FundService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], FundService);

var _a;
//# sourceMappingURL=fund.service.js.map

/***/ }),

/***/ "./src/app/services/interaction.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InteractionService = (function () {
    function InteractionService() {
        // properties
        // event callback mapping; key: event name, value: array of registered callbacks
        this.callbacks = new Map();
        // queued fire callback requests; key: event, value: array of data objects sent
        this.queue = new Map();
        this.api = {
            'registerCallback': this.registerCallback,
            'invoke': this.invoke
        };
    }
    /**
     * Register callback for a specific event
     * @param name name of the event to subscribe to
     * @param callback callback function to be invoked with the event occurs
     * @param clear clear all existing callbacks for the given name
     */
    InteractionService.prototype.registerCallback = function (name, callback, clear) {
        var _this = this;
        // create callback array if it doest not already exist
        if (!this.callbacks[name] || clear) {
            this.callbacks[name] = [];
        }
        this.callbacks[name].push(callback);
        // fire any requests already received
        if (this.queue[name]) {
            this.queue[name].forEach(function (q) {
                _this.invoke(name, q);
            });
            this.queue[name] = [];
        }
    };
    /**
     * Invoke all registered callback for the specified event
     * @param name name of the event
     */
    InteractionService.prototype.invoke = function (name, data) {
        // invoke callbacks if exist
        if (this.callbacks[name]) {
            this.callbacks[name].forEach(function (c) {
                try {
                    c(data);
                }
                catch (ex) {
                    console.log('Error invoking callback function for event ' + name);
                }
            });
        }
        else {
            // enqueue request
            if (!this.queue[name]) {
                this.queue[name] = [];
            }
            this.queue[name].push(data);
        }
    };
    /**
     * Show alert
     * @param text alert text
     * @param type alert type. bootstrap context classes are supported
     * @param autoClose auto close after a delay
     */
    InteractionService.prototype.showAlert = function (text, type, autoClose) {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* AppConstants */].EVENTS.showAlert, { text: text, type: type, autoClose: autoClose });
    };
    /** Hide Alert */
    InteractionService.prototype.hideAlert = function () {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* AppConstants */].EVENTS.hideAlert);
    };
    /**
     * Show / hide loading screen
     * @param show true, to show; false, to hide
     */
    InteractionService.prototype.showLoader = function (show) {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* AppConstants */].EVENTS.showLoader, show);
    };
    /** Show / hide feeds sidebar
     *  @param show true, to show; false, to hide
     */
    InteractionService.prototype.showFeeds = function () {
        this.invoke(__WEBPACK_IMPORTED_MODULE_1__app_constants__["a" /* AppConstants */].EVENTS.showFeeds);
    };
    return InteractionService;
}());
InteractionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], InteractionService);

//# sourceMappingURL=interaction.service.js.map

/***/ }),

/***/ "./src/app/services/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
        this.endpoint = {
            'getPortfolio': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/portfolio',
            'createPortfolio': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/portfolio',
        };
    }
    PortfolioService.prototype.getPortfolio = function () {
        var url = this.endpoint.getPortfolio;
        return this.http.get(url, { withCredentials: true });
    };
    PortfolioService.prototype.createPortfolio = function (portfolio) {
        var url = this.endpoint.createPortfolio;
        return this.http.post(url, portfolio, { withCredentials: true });
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], PortfolioService);

var _a;
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constants__ = __webpack_require__("./src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.endpoint = {
            'login': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/login',
            'logout': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/logout',
            'loggedIn': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/loggedIn',
            'register': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/register',
            'createUser': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user',
            'getAllUsers': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/all',
            'findUserByUsername': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user?username={username}',
            'searchByName': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/search?name={query}',
            'findUserById': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'findUsersByIds': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/byIds?userIds={userIds}',
            'updateUser': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}',
            'deleteUser': __WEBPACK_IMPORTED_MODULE_2__app_constants__["a" /* AppConstants */].ENDPOINT.baseUrl + '/user/{userId}'
        };
    }
    // #region: Authentication
    /**
     * Login user
     * @param username username
     * @param password password
     * @returns Observable that resolves to the user if the creds match; null other wise
     */
    UserService.prototype.login = function (username, password) {
        var url = this.endpoint.login;
        var creds = {
            username: username,
            password: password
        };
        return this.http.post(url, creds, { withCredentials: true });
    };
    /** Logout user */
    UserService.prototype.logout = function () {
        var url = this.endpoint.logout;
        return this.http.post(url, '', { withCredentials: true });
    };
    /**
     * Check if current user is logged in
     * @returns Observable that resolves to the logged-in user; null other wise
     * */
    UserService.prototype.loggedIn = function () {
        var url = this.endpoint.loggedIn;
        return this.http.get(url, { withCredentials: true });
    };
    //#endregion: Authentication
    /**
     * Get all avaiable users
     * @returns Observable that resolves to the list of available users
     */
    UserService.prototype.getAllUsers = function () {
        var url = this.endpoint.getAllUsers;
        return this.http.get(url, { withCredentials: true });
    };
    /**
     * Search by name
     * @param query comma seperated list of usernames
     * @returns Observable that resolves to the list of users that match the given query
     */
    UserService.prototype.searchByName = function (query) {
        var url = this.endpoint.searchByName.replace('{query}', query);
        return this.http.get(url, { withCredentials: true });
    };
    /**
       * Register new user
       * @param username username
       * @param password password
       * @returns Observable that resolves to newly registered user
       */
    UserService.prototype.register = function (username, password) {
        var url = this.endpoint.register;
        var creds = {
            username: username,
            password: password
        };
        return this.http.post(url, creds);
    };
    /**
     * Create new user
     * @param user user
     * @returns Observable that resolves to newly created user
     */
    UserService.prototype.createUser = function (user) {
        var url = this.endpoint.createUser;
        var creds = {
            username: user.username,
            password: user.password,
            name: user.name,
            email: user.email,
            userType: user.userType || 'user'
        };
        return this.http.post(url, creds, { withCredentials: true });
    };
    /**
     * Find user by user id
     * @param userId id of the user
     * @returns Observable that resolves to user with the specifed id; null if id doesn't exist
     */
    UserService.prototype.findUserById = function (userId) {
        var url = this.endpoint.findUserById.replace('{userId}', userId);
        return this.http.get(url, { withCredentials: true });
    };
    /**
     * Find users by user ids
     * @param userIds comma seperated list of user ids
     * @returns Observable that resolves to the list of users with the given user ids
     */
    UserService.prototype.findUsersByIds = function (userIds) {
        var url = this.endpoint.findUsersByIds.replace('{userIds}', userIds);
        return this.http.get(url, { withCredentials: true });
    };
    /**
     * Update user by user id
     * @param {string} userId id of the user
     * @param user updated user object
     * @returns Observable that resolves to updated user object
     */
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.endpoint.updateUser.replace('{userId}', userId);
        return this.http.put(url, user, { withCredentials: true });
    };
    /**
     * Delete user by user id
     * @param {string} userId id of the user
     * @returns Observable that resolves to deleted user object
     */
    UserService.prototype.deleteUser = function (userId) {
        var url = this.endpoint.deleteUser.replace('{userId}', userId);
        return this.http.delete(url, { withCredentials: true });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    endpoint: {
        root: '/',
        baseUrl: '/api'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map