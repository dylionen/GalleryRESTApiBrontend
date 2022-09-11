import { Component, Input, OnInit } from '@angular/core';
import { Login } from './login';
import { NgForm } from '@angular/forms';
import { Loginservice } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login!: Login;

  setEmptyLogin() {
    return { username: '', password: '' };
  }
  constructor(private loginService: Loginservice) {
    this.login = this.setEmptyLogin();
  }

  ngOnInit(): void {
    this.login = this.setEmptyLogin();
  }

  onSubmit() {
    console.log(this.login);
    this.loginService
      .fetchLogin(this.login)
      .subscribe((response: Object) => console.log(response));
  }
}