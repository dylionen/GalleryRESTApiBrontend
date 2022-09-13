import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeaderService } from '../header.service';
import { Login } from './login';
import { Token } from './token';
import { Users } from './user';

@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(
    private httpClient: HttpClient,
    private headerService: HeaderService
  ) {}

  public fetchLogin(login: Login): Observable<Token> {
    return this.httpClient.post<Token>(
      'http://localhost:8080/login/authenticate',
      login
    );
  }

  public checkToken(): Observable<Users> {
    let header = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', localStorage.getItem('Authorization') || '');
    console.log(header);
    return this.httpClient.get<Users>('http://localhost:8080/login', {
      headers: header,
    });
  }
}
