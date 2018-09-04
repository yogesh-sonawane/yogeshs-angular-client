import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsValidationRoutingModule} from './form-validations.routing';
import {FormsModule} from '@angular/forms';
import {FormValidationsComponent} from './form-validations.component';
import {UserInputComponent} from './user-input/user-input.component';
// import {NavbarHeaderTemplateComponent} from '../components/header/navbar-header-template.component';

@NgModule({
    imports: [
        CommonModule, FormsModule, FormsValidationRoutingModule
    ],
    declarations: [
        FormValidationsComponent, UserInputComponent
    ],
    providers: []
})
export class FormValidationsModule {}