import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  URL: string = `http://localhost:3000`;

  usuario: any | undefined = undefined;

  constructor(private http: HttpClient) {}

  public login(email: string, passwd: string): Promise<boolean> {
    const urlLogin = `${this.URL}/auth/login`;
    return new Promise((resolve, reject) => {
      this.http
        .post<any>(urlLogin, {
          email,
          passwd,
        })
        .subscribe((obj) => {
          if (!obj) resolve(false);
          this.usuario = obj;
          resolve(true);
        });
    });
  }

  public signup(email: string, passwd: string): Promise<boolean> {
    const urlSignup = `${this.URL}/auth/registro`;
    return new Promise((resolve, reject) => {
      this.http
        .post<any>(urlSignup, {
          email,
          passwd,
        })
        .subscribe((obj) => {
          if (!obj) resolve(false);
          this.usuario = obj;
          resolve(true);
        });
    });
  } 
}
