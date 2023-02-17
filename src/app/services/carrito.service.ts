import { Injectable } from '@angular/core';
import { Card } from '../models/carta.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private storage: LocalStorageService) {}

  obtenerItems() {
    return JSON.parse(this.storage.get('items') || '[]') || [];
  }

  agregarItem(item: Card, cant: number = 1) {
    let items = this.obtenerItems();
    items.push({ id: item.id, cantidad: cant });
    this.storage.save('items', JSON.stringify(items));
  }

  borrarItem(item: Card) {
    let items = this.obtenerItems();
    items = items.filter((i: any) => i.id !== item.id);
    this.storage.save('items', JSON.stringify(items));
  }

  actualizarCantidad(item: Card, cant: number) {
    let items = this.obtenerItems();
    const index = items.findIndex((i: any) => i.id === item.id);
    if (index >= 0) {
      items[index].cantidad = cant;
      this.storage.save('items', JSON.stringify(items));
    }
  }

  vaciarCarrito() {
    this.storage.remove('items');
  }
}
