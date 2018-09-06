import {Component, OnInit} from '@angular/core';
import {UserMasterService} from '../../app-services/user-master/user-master-service';
import {Router} from '@angular/router';

@Component({selector: 'app-user-signup', templateUrl: './user-signup.component.html', styleUrls: ['./user-signup.component.css']})
export class UserSignupComponent implements OnInit {
  public model : any = {};
  public loading = false;
  constructor(private router : Router, private userMasterService : UserMasterService) {}
  ngOnInit() {}
  createAccount() {
    var userModel = this.model;
    this.loading = true;
    this
      .userMasterService
      .create(userModel)
      .subscribe(data => {
        console.log(data);
        this
          .router
          .navigate(['/user-login']);
        this.loading = false;
      }, error => {
        console.log(error);
        this.loading = false;
      });
  }
}
