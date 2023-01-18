import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from '../models/carta.model';

@Injectable({
  providedIn: 'root'
})
export class CartasService {

  private _jsonURL = 'assets/data/dataAPIyugioh.json';

  constructor(private http: HttpClient) {
    
  }

  public getJSON(): Observable<Card[]> {
    return this.http.get<Card[]>(this._jsonURL);
  }
  
}
