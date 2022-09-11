import { Component, Input, OnInit } from '@angular/core';
import { Login } from './login';
import { Loginservice } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public login!: Login;
  public loginError: Boolean;

  setEmptyLogin() {
    return { username: '', password: '' };
  }
  constructor(private loginService: Loginservice) {
    this.login = this.setEmptyLogin();
    this.loginError = false;
  }

  ngOnInit(): void {
    this.login = this.setEmptyLogin();
  }

  onSubmit() {
    console.log(this.login);
    this.loginService.fetchLogin(this.login).subscribe({
      next: (v) => {
        localStorage.setItem('Authentication', JSON.stringify(v.jwtToken));
        console.log(v);
      },
      error: (e) => {
        console.error(e);
        this.loginError = true;
      },
      complete: () => console.info('complete'),
    });
  }
}
