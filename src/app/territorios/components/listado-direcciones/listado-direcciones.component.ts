import { Component } from '@angular/core';

@Component({
  selector: 'app-territorios-listado-direcciones',
  templateUrl: './listado-direcciones.component.html',
  styleUrl: './listado-direcciones.component.css'
})
export class ListadoDireccionesComponent {
  listadoDirecciones: string[] = ['Aristóbulo del Valle 583', 'Las Higueritas 2080', 'Huiñaj 18', 'Manuel García Fernandez 290'];
}
