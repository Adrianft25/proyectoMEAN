import { Component, OnInit } from '@angular/core';

interface Signup{

  usuario: string;
  passwd: string;
  passwd2: string;

}


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registro: Signup = {

    usuario: '',
    passwd: '',
    passwd2: '',
  }

  submitted = false;

  constructor(){}

  ngOnInit(): void {
  }

  onSubmit() { this.submitted = true; }

}
