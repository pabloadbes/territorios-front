import { Component, Input } from '@angular/core';
import { Territorio } from '../../interfaces/territorio';

@Component({
  selector: 'territorios-listado-territorios',
  templateUrl: './listado-territorios.component.html',
})
export class ListadoTerritoriosComponent {
  @Input()
  listadoTerritorios: Territorio[] = [];
}
