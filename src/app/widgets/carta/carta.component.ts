import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/carta.model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent implements OnInit {

  @Input() card: Card | undefined;
  url_image: string = '';
  precio: string | undefined;

  constructor() {
  }

  ngOnInit() {
    this.url_image = this.card?.card_images[0]?.image_url_small ?? '';
    this.precio = this.card?.card_prices[0]?.tcgplayer_price;
  }

}
