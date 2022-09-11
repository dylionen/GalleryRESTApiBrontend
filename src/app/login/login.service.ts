import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';
import { Token } from './token';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(private httpClient: HttpClient) {}

  public fetchLogin(login: Login): Observable<Token> {
    return this.httpClient.post<Token>(
      'http://localhost:8080/login/authenticate',
      login
    );
  }
}
