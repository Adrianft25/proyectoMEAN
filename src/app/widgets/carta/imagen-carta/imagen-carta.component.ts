import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen-carta',
  templateUrl: './imagen-carta.component.html',
  styleUrls: ['./imagen-carta.component.scss']
})
export class ImagenCartaComponent {
  @Input() imagen: string | undefined;
  @Input() efectoHover: boolean = false;

}
