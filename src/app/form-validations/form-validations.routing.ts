import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormValidationsComponent} from './form-validations.component';
import {UserInputComponent} from './user-input/user-input.component';
var appFormsRoutes : Routes = [
    {
        path: '',
        component: FormValidationsComponent
    }, {
        path: 'user-input',
        component: UserInputComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(appFormsRoutes)],
    exports: [RouterModule]
})
export class FormsValidationRoutingModule {}