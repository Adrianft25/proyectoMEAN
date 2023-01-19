import { Component, Input } from '@angular/core';
import { Card } from 'src/app/models/carta.model';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss']
})
export class CartaComponent {

  @Input() card: Card | undefined;

  constructor() { }

}
