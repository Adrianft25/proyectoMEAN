import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/carta.model';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss'],
})

export class CartasComponent implements OnInit {
  cards: Card[] = [];
  
  // Paginación
  limit = 30;
  page = 1;
  maxPages = 0;
  hasPrevPage = false;
  hasNextPage = false;

  constructor(private _cartasService: CartasService) {}

  ngOnInit(): void {
    this.getCartas();
  }

  cambiarPagina(pagina: number) {
    if(pagina == -1 && this.hasPrevPage) this.page--;
    if(pagina == 1 && this.hasNextPage) this.page++;
    this.getCartas();
  }

  getCartas(){
    this._cartasService.getAllCartas({ page: this.page, limit: this.limit }).subscribe((obj: any) => {
      const { data, prevPag, nextPag, numPag } = obj; // const data = obj.data;
      if (!data) return;
      this.hasPrevPage = (prevPag) ? true : false;
      this.hasNextPage = (nextPag) ? true : false;
      this.maxPages = numPag;
      this.cards = data;
    });
  }

}