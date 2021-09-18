import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginTypes = {
    MANAGER: 'MANAGER',
    SCHOLAR: 'SCHOLAR'
  };
  type: string = this.loginTypes.MANAGER;

  constructor() { }

  ngOnInit() {}

  setType(t: string) {
    this.type = t;
  }
}
