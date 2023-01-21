import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Signin {

  usuario: string;
  passwd: string;

}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Output() onLogin = new EventEmitter();

  login: Signin = {

    usuario: '',
    passwd: ''

  }

  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.onLogin.emit(this.login); 
    console.log(this.login);
  }

}
