import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this._authService.doFacebookLogin();
  }

  logout() {
    this._authService.doLogout();
  }

}
