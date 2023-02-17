import { Component } from '@angular/core';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent {
  constructor(private carrito: CarritoService) {
    console.log(this.carrito.obtenerItems());
  }
}
