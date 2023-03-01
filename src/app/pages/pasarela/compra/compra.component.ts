import { Component, OnInit } from '@angular/core';
import {
  IPayPalConfig,
  ICreateOrderRequest,
  IPurchaseUnit,
  IUnitAmount,
  ITransactionItem,
} from 'ngx-paypal';
import { Card } from 'src/app/models/carta.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss'],
})
export class CompraComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  showSuccess: boolean = false;
  showCancel: boolean = false;
  showError: boolean = false;

  itemsCarrito: Card[] = [];

  datosCompra: IPurchaseUnit | undefined;

  constructor(
    private carritoService: CarritoService,
    private cartasService: CartasService
  ) {}

  ngOnInit(): void {
    const items = this.carritoService.obtenerItems();
    this.cartasService.getCartasCarrito(items).subscribe((data: Card[]) => {
      this.itemsCarrito = data;
      this.rellenarDatosCompra();
      this.addDatosFactura();
    });
  }

  rellenarDatosCompra() {
    let precioTotal = 0;

    for (let i = 0; i < this.itemsCarrito.length; i++) {
      let price = parseFloat(
        this.itemsCarrito[i]?.card_prices[0]?.cardmarket_price ?? 1
      );
      precioTotal += (this.itemsCarrito[i].cantidad ?? 1) * price;
      console.log(price);
      console.log(precioTotal);
    }

    const amount: IUnitAmount = {
      currency_code: 'USD',
      value: `${precioTotal}`, //TODO total del carrito
      breakdown: {
        item_total: {
          currency_code: 'USD',
          value: `${precioTotal}`, //TODO total del carrito
        },
      },
    };

    let itemsPaypal: ITransactionItem[] = [];
    this.itemsCarrito.forEach((item) => {
      itemsPaypal.push({
        name: item.name, //TODO nombre del item
        quantity: `${item.cantidad}`, //TODO cantidad del item
        category: 'PHYSICAL_GOODS',
        unit_amount: {
          currency_code: 'USD',
          value: item.card_prices[0]?.cardmarket_price, //TODO precio de cada item
        },
      });
    });

    this.datosCompra = { amount, items: itemsPaypal };
  }

  private addDatosFactura(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId:
        'AQ4AAoK5POVZOid0pKX0aiXeQKXEiS2HHdS4RJz-Hissd6ycSPFq66mKbYn_IuCHC9bq1S71rC5SXP4K',
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          intent: 'CAPTURE',
          purchase_units: [this.datosCompra],
        },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data, actions) => {
        console.log(
          'onApprove - transaction was approved, but not authorized',
          data,
          actions
        );
        actions.order.get().then((details: any) => {
          console.log(
            'onApprove - you can get full order details inside onApprove: ',
            details
          );
          this.carritoService.procesarPedido(details);
        });
      },
      onClientAuthorization: (data) => {
        console.log(
          'onClientAuthorization - you should probably inform your server about completed transaction at this point',
          data
        );
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
        this.showCancel = true;
      },
      onError: (err) => {
        console.log('OnError', err);
        this.showError = true;
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
        this.resetStatus();
      },
    };
  }
  resetStatus() {
    this.showSuccess = false;
    this.showCancel = false;
    this.showError = false;
  }
}
