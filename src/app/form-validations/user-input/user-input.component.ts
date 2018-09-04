import {Component} from "@angular/core";
import {NavbarHeaderTemplateComponent} from '../../components/header/navbar-header-template.component';
import {NgForm} from '@angular/forms';
import {Hero} from "../../models/hero";

@Component({selector: 'form-user-input', templateUrl: './user-input.html', styleUrls: ['./user-input.css']})
export class UserInputComponent {
    testValues = '';
    onKey(event : any) {
        this.testValues += event.target.value + ' | ';
    };
    /*
    onKey(event: any) { // without type info
      this.values += event.target.value + ' | ';
    }
    */

    /*
    onKey(event: KeyboardEvent) { // with type info
        this.values += (<HTMLInputElement>event.target).value + ' | ';
    }
    */

    normalValue = "";
    onTest(value : string) {
        this.normalValue = value;
    };

    keyInputValue = "";
    onEnter(value : string) {
        this.keyInputValue = value;
    }

    onSubmit(f : NgForm) {
        console.log(f.value);
    };

    // This is for HeroForm...

onSubmitHero(ngForm: NgForm){
    console.log(ngForm);
};
    public powers = [
        {
            name: "Select Power",
            value: ''
        }, {
            name: "Really Smart",
            value: 'Really Smart'
        }, {
            name: "Super Flexible",
            value: 'Super Flexible'
        }, {
            name: "Super Hot",
            value: 'Super Hot'
        }, {
            name: 'Weather Changer',
            value: 'Weather Changer'
        }
    ];
    public model = new Hero(18, 'Dr IQ', this.powers[1].name, 'Chuck Overstreet');
}