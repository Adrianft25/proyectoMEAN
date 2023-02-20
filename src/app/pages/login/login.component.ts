import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showLogin = true;
  showRegistro = false;

  constructor(private _loginService: SesionService) {}

  ngOnInit(): void {}

  async login(login: any) {
    await this._loginService.login(login.email, login.passwd)
      .then((res: boolean) => {
        console.log(res);
      });
    //this.showLogin = false;
    //this.showRegistro = true;
  }

  async signup(signup: any) {
    await this._loginService.signup(signup.email, signup.passwd)
      .then((res: boolean) => {
        console.log(res);
      });
    //this.showLogin = false;
    //this.showRegistro = true;
  }
}
