import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  //声明成员变量，其类型为AuthService
  //service: AuthService;
  username = "";
  password = "";

  constructor( @Inject('auth') private service) {
    //this.service=new AuthService();
  }

  ngOnInit() {
  }

  // onClick(userNameRef,passwordRef){
  //   alert("auth result is :"+this.service.loginWithCredentials(userNameRef,passwordRef));
  // }
  onClick() {
    alert("auth result is :" + this.service.loginWithCredentials(this.username, this.password));
  }

  onSubmit(formValue) {
    console.log("auth result is :" + this.service.loginWithCredentials(formValue.login.username, formValue.login.password));
  }
}