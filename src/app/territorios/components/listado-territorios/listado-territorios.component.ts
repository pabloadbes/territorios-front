import { Component, Input } from '@angular/core';
import { Territorio } from '../../interfaces/territorio';

@Component({
  selector: 'territorios-listado-territorios',
  templateUrl: './listado-territorios.component.html',
  styleUrl: './listado-territorios.component.css'
})
export class ListadoTerritoriosComponent {
  @Input()
  listadoTerritorios: Territorio[] = [];
}
