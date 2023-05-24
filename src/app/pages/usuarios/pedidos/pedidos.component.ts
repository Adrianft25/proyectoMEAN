import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/models/factura.model';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  facturas: Factura[] = [];

  constructor(private sesionService: SesionService) {}

  ngOnInit() {
    this.sesionService.getFacturasUsuario().subscribe((res) => {
      console.log(res);
      this.facturas = res.facturas as Factura[];
    });
  }

  calculoSubtotal(unidades:any, precioUnidad:any){
    return (parseFloat(unidades) * parseFloat(precioUnidad)).toFixed(2)
  }
}
