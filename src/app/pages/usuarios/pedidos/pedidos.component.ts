import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  constructor(private sesionService: SesionService) {}

  ngOnInit() {
    this.sesionService.getFacturasUsuario().subscribe((res) => {
      console.log(res);
    });
  }
  
}
