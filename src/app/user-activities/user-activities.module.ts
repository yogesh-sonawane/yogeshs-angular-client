import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserActivitiesComponent} from './user-activities.component';
import {UserActivitiesRoutingModule} from './user-activities.routing';
import {UserSignupComponent} from './user-signup/user-signup.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {UserMasterService} from '../app-services/user-master/user-master-service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule, UserActivitiesRoutingModule, FormsModule
    ],
    declarations: [
        UserActivitiesComponent, UserSignupComponent, UserLoginComponent, ForgotPasswordComponent
    ],
    providers: [UserMasterService]
})
export class UserActivitiesModule {}