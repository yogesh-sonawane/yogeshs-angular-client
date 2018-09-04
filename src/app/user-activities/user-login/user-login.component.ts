import {Component, OnInit} from '@angular/core';
import {UserMasterService} from '../../app-services/user-master/user-master-service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({selector: 'app-user-login', templateUrl: './user-login.component.html', styleUrls: ['./user-login.component.css']})
export class UserLoginComponent implements OnInit {
  constructor(private router : Router, private userMaster : UserMasterService) {}
  ngOnInit() {}
  userLogin() {
    this
      .userMaster
      .userLogin({UserName: "yogeshs", Password: "Yogesh@123"})
      .subscribe(p => {
        this
          .router
          .navigate(['/project-workspace']);
      });
  }
}
