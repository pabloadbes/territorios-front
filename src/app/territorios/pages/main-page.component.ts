import { Component } from '@angular/core';
import { Direccion } from '../interfaces/territorio.direccion';

@Component({
    selector: 'app-territorios-main-page',
    templateUrl: 'main-page.component.html'
})

export class TerritoriosMainPageComponent {
  direcciones: Direccion[] = [{
    calle: 'Aristóbulo del Valle',
    numero: 583,
    departamento: 'B'
  },{
    calle: 'Las Higueritas',
    numero: 2080
  },{
    calle: 'Huiñaj',
    numero: 18
  },{
    calle: 'Manuel García Fernandez',
    numero: 290
  },{
    calle: 'Albacete',
    numero: 2005,
    departamento: 'D',
    piso: '2'
  }]
}
