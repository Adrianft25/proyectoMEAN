import { Component } from '@angular/core';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  constructor(public usuarioService:SesionService){}

 

}
