import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  httpOptions!: any;

  constructor(private http: HttpClient) {
    this.createOrRefreshHttpOptions();
  }

  createOrRefreshHttpOptions() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('jwtToken') || '',
      }),
    };
    console.log(this.httpOptions);
  }
}
