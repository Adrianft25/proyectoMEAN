import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-imagen-carta',
  templateUrl: './imagen-carta.component.html',
  styleUrls: ['./imagen-carta.component.scss']
})
export class ImagenCartaComponent {
  @Input() imagen: string | undefined;
  @Input() efectoHover: boolean = false;
  @ViewChild('imgCarta') carta: ElementRef | undefined;
  @ViewChild('divCarta') contenedor: ElementRef | undefined;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    if (this.efectoHover) this._setEfectoHover();
  }

  // Añadir efecto carta
  private _setEfectoHover() {
    const carta = this.carta?.nativeElement;
    const contenedor = this.contenedor?.nativeElement;
    if (!carta || !contenedor) return;
    const { width, height } = carta.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    this.renderer.listen(contenedor, 'mousemove', (event: any) => {
      carta.style.transition = 'none';
      const { offsetX, offsetY } = event;
      console.log({ offsetX, offsetY })
      let rotationX = ((offsetX - halfWidth) / width) * 30;
      let rotationY = ((offsetY - halfHeight) / height) * 30;
      if (offsetY > halfHeight) rotationY = -1 * rotationY;
      carta.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    });

    this.renderer.listen(contenedor, 'mouseleave', () => {
      carta.style.transition = '.5s ease-in-out all';
      carta.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
  }

}
