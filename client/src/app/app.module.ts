import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { AlertComponent } from './components/shared/alert/alert.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { InteractionService } from './services/interaction.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { PortfolioService } from './services/portfolio.service';
import { CurrencyService } from './services/currency.service';
import { CurrencyComponent } from './components/currency/currency.component';
import { FundBuySellComponent } from './components/fund/fund-buy-sell/fund-buy-sell.component';
import { FundService } from './services/fund.service';
import { FundListComponent } from './components/fund/fund-list/fund-list.component';
import { DiscussionService } from './services/discussion.service';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { DiscussionListComponent } from './components/discussion/discussion-list/discussion-list.component';
import { DiscussionViewComponent } from './components/discussion/discussion-view/discussion-view.component';
import { DiscussionEditComponent } from './components/discussion/discussion-edit/discussion-edit.component';
import { DiscussionCreateComponent } from './components/discussion/discussion-create/discussion-create.component';
import { CommentService } from './services/comment.service';
import { CommentListComponent } from './components/discussion/comment/comment-list/comment-list.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';
import { FilterCurrencyPipe } from './components/pipes/filter-currency.pipe';
import { ScreenHeightDirective } from './directives/screen-height.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    LoaderComponent,
    NavComponent,
    PortfolioComponent,
    CurrencyComponent,
    FundBuySellComponent,
    FundListComponent,
    DiscussionComponent,
    DiscussionListComponent,
    DiscussionViewComponent,
    DiscussionEditComponent,
    DiscussionCreateComponent,
    CommentListComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    AdminComponent,
    FilterCurrencyPipe,
    ScreenHeightDirective
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InteractionService,
    AuthService,
    ErrorHandlerService,
    UserService,
    PortfolioService,
    CurrencyService,
    FundService,
    DiscussionService,
    CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
