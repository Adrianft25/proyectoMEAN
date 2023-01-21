import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  showLogin = true;
  showRegistro = false;

  constructor(){}

  ngOnInit(): void {
  }

  login(login:any) {
    console.log(login);
    this.showLogin = false;
    this.showRegistro = true;
  }

}
