import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card } from '../models/carta.model';
import { LocalStorageService } from './local-storage.service';
import { SesionService } from './sesion.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  URL: string = `http://localhost:3000`;

  constructor(
    private storage: LocalStorageService,
    private http: HttpClient,
    private usuarioService: SesionService
  ) {}

  obtenerItems() {
    return JSON.parse(this.storage.get('items') || '[]') || [];
  }

  agregarItem(item: Card, cant: number = 1) {
    let items = this.obtenerItems();
    if (items.some((i: any) => i.id === item.id)) {
      this.actualizarCantidad(item);
    } else {
      items.push({ id: item.id, cantidad: cant });
      this.storage.save('items', JSON.stringify(items));
    }
  }

  borrarItem(item: Card) {
    let items = this.obtenerItems();
    items = items.filter((i: any) => i.id !== item.id);
    this.storage.save('items', JSON.stringify(items));
  }

  actualizarCantidad(item: Card, cant?: number) {
    let items = this.obtenerItems();
    const index = items.findIndex((i: any) => i.id === item.id);
    if (index >= 0) {
      items[index].cantidad = cant || items[index].cantidad + 1;
      this.storage.save('items', JSON.stringify(items));
    }
  }

  vaciarCarrito() {
    this.storage.remove('items');
  }

  procesarPedido(details: any) {
    const urlPedido = `${this.URL}/compra`;
    this.vaciarCarrito();
    return this.http.post(urlPedido, {
      details,
      userId: this.usuarioService.getIdUsuario(),
    });
  }
}
