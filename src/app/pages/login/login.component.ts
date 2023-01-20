import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
  }

  //Recuperar los datos del formulario de Login

  login(form:NgForm) {

    const email = form.value.email;
    const pass = form.value.passwd;
  }

}
