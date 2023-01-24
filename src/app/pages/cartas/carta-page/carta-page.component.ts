import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Card } from 'src/app/models/carta.model';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-carta-page',
  templateUrl: './carta-page.component.html',
  styleUrls: ['./carta-page.component.scss'],
})
export class CartaPageComponent implements OnInit {
  carta: Card | undefined;

  constructor(private route: ActivatedRoute, private cartasService: CartasService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id') ?? '');
      this.cartasService.getCarta(id).subscribe((c: Card) => this.carta = c);
    });
  }
}
