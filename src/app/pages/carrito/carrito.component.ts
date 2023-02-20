import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/carta.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit {
  cartasCarrito: Card[] = [];
  parseFloat = parseFloat;

  constructor(private carrito: CarritoService, private cartas: CartasService) {}

  ngOnInit() {
    const items = this.carrito.obtenerItems();

    this.cartas.getCartasCarrito(items).subscribe((data: Card[]) => {
      this.cartasCarrito = data;
    });
  }
}
