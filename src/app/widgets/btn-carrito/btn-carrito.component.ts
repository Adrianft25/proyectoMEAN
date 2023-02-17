import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btn-carrito',
  templateUrl: './btn-carrito.component.html',
  styleUrls: ['./btn-carrito.component.scss']
})
export class BtnCarritoComponent {

  constructor(private router: Router) {}

  public irCarrito() {
    this.router.navigate(['/carrito']);
  }
}

