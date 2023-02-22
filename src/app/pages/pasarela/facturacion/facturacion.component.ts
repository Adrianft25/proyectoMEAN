import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent {

  constructor(private router: Router) { }

  public completarPago(){
    this.router.navigate(['/pasarela/compra']);
  }

  public cancelarFacturacion(): void{
    this.router.navigate(['/carrito']);
  }

}

