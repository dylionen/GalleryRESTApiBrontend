import { Component, OnInit } from '@angular/core';
import { Loginservice } from '../login/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  public username: String | undefined | null;

  constructor(private loginService: Loginservice) {
    if (localStorage.getItem('username')) {
      this.username = localStorage.getItem('username');
    }
    loginService.checkToken().subscribe({
      next: (v) => {
        this.username = v.userName;
      },
      error: (e) => {
        localStorage.setItem('Authorization', '');
        localStorage.setItem('Username', '');
        this.username = null;
      },
      complete: () => console.info('complete'),
    });
  }

  ngOnInit(): void {}
}
