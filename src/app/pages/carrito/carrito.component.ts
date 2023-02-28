import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private carrito: CarritoService, private cartas: CartasService, private router: Router) {}

  ngOnInit() {
    const items = this.carrito.obtenerItems();

    this.cartas.getCartasCarrito(items).subscribe((data: Card[]) => {
      this.cartasCarrito = data;
    });
  }

  public vaciarCarrito(): void {
    this.carrito.vaciarCarrito();
    this.cartasCarrito = [];
  }

  public finalizarCompra(): void {
    this.router.navigate(['/pasarela/compra']);
  }
}


