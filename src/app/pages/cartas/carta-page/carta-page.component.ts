import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Card } from 'src/app/models/carta.model';
import { CarritoService } from 'src/app/services/carrito.service';
import { CartasService } from 'src/app/services/cartas.service';

@Component({
  selector: 'app-carta-page',
  templateUrl: './carta-page.component.html',
  styleUrls: ['./carta-page.component.scss'],
})
export class CartaPageComponent implements OnInit {
  carta: Card | undefined;

  constructor(private route: ActivatedRoute, private cartasService: CartasService, private carritoService: CarritoService, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params.get('id') ?? '');
      this.cartasService.getCarta(id).subscribe((c: Card) => {
        this.carta = c;
        console.log(c);
      });
    });
  }

  public addCarrito(cant: number = 1) {
    if (!this.carta) return;
    this.carritoService.agregarItem(this.carta, cant);
    this.router.navigate(['/carrito']);
  }
}
