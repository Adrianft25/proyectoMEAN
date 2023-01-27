import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  URL: string = `http://localhost:3000`;

  token: string | undefined = undefined;

  constructor(private http: HttpClient) {}

  public login(): Promise<boolean> {
    const urlLogin = `${this.URL}/auth/login`;
    return new Promise((resolve, reject) => {
      this.http.post<any>(urlLogin, {
        email: 'loquesea@asdf.com',
        passwd: '1234asdf',
      }).subscribe(obj => {
        if (!obj.token) resolve(false);
        this.token = obj.token;
        resolve(true);
      });
    });
  }
}
