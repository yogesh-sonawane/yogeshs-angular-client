import {OnInit, Component} from '@angular/core';;
import {NgForm} from '@angular/forms';
@Component({selector: 'form-validations', templateUrl: './form-validations.html', styleUrls: ['./form-validations.css']})
export class FormValidationsComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
    public answer = "";
    public genders = ["Male", "Female"];
    onSubmit(f : NgForm) {
        console.log(f);
    };
}