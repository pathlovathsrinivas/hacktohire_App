import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/alert-service.service';

import { loginsModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLoginModel: loginsModel;
  constructor(private router: Router,private alertService: AlertService) { }

  ngOnInit(): void {
    this.userLoginModel = new loginsModel;
  }
  login(userLoginModel) {
    console.log(userLoginModel)
    if(userLoginModel&&userLoginModel.password===""){
    this.alertService.alertThis('please enter valid email and password', 'S', function () { 
    });
  }
  else{
    this.router.navigate(['/dashboard']);
  }
}
}
