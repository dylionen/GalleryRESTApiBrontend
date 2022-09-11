import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class Loginservice {

  constructor(private httpClient: HttpClient) { }

  public fetchLogin(login :Login): Observable<Object>{
    return this.httpClient.post('http://localhost:8080/login/authenticate', login);
  }
}
