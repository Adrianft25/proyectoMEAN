import { Component } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'btn-logout',
  templateUrl: './btn-logout.component.html',
  styleUrls: ['./btn-logout.component.scss']
})
export class BtnLogoutComponent {
  
  constructor(private sesion: SesionService ) {
  
  }

  public logOut(): void {
    this.sesion.cerrarSesion();
  }
  
}
