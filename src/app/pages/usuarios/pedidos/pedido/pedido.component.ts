import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit{

  @Input() pedido:any;

  calculoSubtotal(unidades:any, precioUnidad:any){
    return (parseFloat(unidades) * parseFloat(precioUnidad)).toFixed(2);
  }

  ngOnInit(): void {
    console.log('this.pedido :>> ', this.pedido);
  }

}
