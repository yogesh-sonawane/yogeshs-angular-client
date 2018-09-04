import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const appRoutes : Routes = [
    {
        path: '',
        component: UserLoginComponent
    }, {
        path: 'user-signup',
        component: UserSignupComponent
    }, {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    }, {
        path: 'user-login',
        component: UserLoginComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class UserActivitiesRoutingModule {}