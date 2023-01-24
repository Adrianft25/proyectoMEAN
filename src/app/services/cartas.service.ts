import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/carta.model';

@Injectable({
  providedIn: 'root',
})
export class CartasService {
  URL: string = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  public getAllCartas(): Observable<Card[]> {
    const urlCartas = `${this.URL}/cartas`;
    return this.http.get<Card[]>(urlCartas);
  }

  public getCarta(id: number | string): Observable<Card> {
    const urlCartas = `${this.URL}/cartas/carta/${id}`;
    return this.http.get<Card>(urlCartas);
  }
}
