import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/carta.model';

@Injectable({
  providedIn: 'root',
})
export class CartasService {
  URL: string = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  public getAllCartas({ page = 1, limit = 30 } : { page: number, limit: number }): Observable<{data: Card[]}> {
      // Crear los parámetros de consulta
      let queryParams = new HttpParams()
        .set('page', page)
        .set('limit', limit);

    const urlCartas = `${this.URL}/cartas`;
    return this.http.get<{data: Card[]}>(urlCartas, { params: queryParams });
  }

  public getCarta(id: number | string): Observable<Card> {
    const urlCartas = `${this.URL}/cartas/carta/${id}`;
    return this.http.get<Card>(urlCartas);
  }

  public getCartasCarrito(itemsCarrito: any[]): Observable<Card[]> {
    const urlCartas = `${this.URL}/cartas/carrito`;
    return this.http.post<Card[]>(urlCartas, {
      itemsCarrito,
    });
  }
}
