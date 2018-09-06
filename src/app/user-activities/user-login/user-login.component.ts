import {Component, OnInit} from '@angular/core';
import {UserMasterService} from '../../app-services/user-master/user-master-service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({selector: 'app-user-login', templateUrl: './user-login.component.html', styleUrls: ['./user-login.component.css']})
export class UserLoginComponent implements OnInit {
  constructor(private router : Router, private userMaster : UserMasterService) {}
  ngOnInit() {}
  public message = ""
  userLogin(ngForm : NgForm) {
    this.message = "";
    this
      .userMaster
      .userLogin(ngForm.value)
      .subscribe(p => {
        this
          .router
          .navigate(['/project-workspace']);
      }, (e) => {
        this.message = e.error
      });
  }
}
