import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/carta.model';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {

  cards: Card[] = [];

  constructor(private _cartasService: CartasService) {

  }

  ngOnInit(): void {

    this._cartasService.getAllCartas().subscribe((data: Card[]) => {
      if (!data) return;
      this.cards = data;
    });

  }

}

