import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SesionService {
  URL: string = `http://localhost:3000`;

  usuario: Usuario | undefined = undefined;

  constructor(
    private http: HttpClient,
    private storage: LocalStorageService,
    private router: Router
  ) {
    const userString = storage.get('usuario');
    if (userString) this.usuario = JSON.parse(userString);
  }

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
          this.saveUsuario(obj);
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
          this.saveUsuario(obj);
          resolve(true);
        });
    });
  }

  public isLoggedIn(): boolean {
    return !this.getUsuario() ? false : true;
  }

  public saveUsuario(usuario: Usuario): void {
    this.usuario = usuario;
    this.storage.save('usuario', JSON.stringify(usuario));
    this.redireccionarPagina('/usuario');
  }

  public cerrarSesion(): void {
    this.storage.remove('usuario');
    this.usuario = undefined;
    this.redireccionarPagina('/login');
  }

  public redireccionarPagina(direccion: string): void {
    this.router.navigate([direccion]);
  }

  public getIdUsuario(): string {
    return this.getUsuario()?.id || '';
  }

  public getUsuario(): Usuario | undefined {
    if (this.usuario != undefined) return this.usuario;
    const userString = this.storage.get('usuario');
    if (userString) this.usuario = JSON.parse(userString);
    return this.usuario;
  }

  public getFacturasUsuario(): Observable<any> {
    const urlFacturas = `${this.URL}/facturas`;
    console.log(this.getIdUsuario());
    return this.http.post<any>(urlFacturas, {
      userId: this.getIdUsuario()
    });
  }
} 