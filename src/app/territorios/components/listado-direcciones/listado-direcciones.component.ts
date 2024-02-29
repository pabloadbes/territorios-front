import { Component, Input } from '@angular/core';
import { Direccion } from '../../interfaces/territorio.direccion';

@Component({
  selector: 'app-territorios-listado-direcciones',
  templateUrl: './listado-direcciones.component.html',
  styleUrl: './listado-direcciones.component.css'
})
export class ListadoDireccionesComponent {

  @Input()
  listadoDirecciones?: Direccion[];
}
