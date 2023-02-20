import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Signup {
  email: string;
  passwd: string;
  passwd2: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Output() onSignup = new EventEmitter();

  registro: Signup = {
    email: '',
    passwd: '',
    passwd2: '',
  };

  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.onSignup.emit(this.registro);
  }
}
