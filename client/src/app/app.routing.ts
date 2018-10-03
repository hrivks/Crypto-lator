import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './components/user/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { RegisterComponent } from './components/user/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './components/user/profile/profile.component';
import { AdminComponent } from './components/admin/admin.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthService] },
    { path: 'portfolio', component: PortfolioComponent, canActivate: [AuthService] },
    { path: 'discussion', component: DiscussionComponent },
    { path: 'discussion/:discussionId', component: DiscussionComponent },
    { path: 'admin', component: AdminComponent, canActivate: [AuthService] }
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
