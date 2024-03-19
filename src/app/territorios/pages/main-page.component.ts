import { Component } from '@angular/core';
import { TerritoriosService } from '../services/territorios.service';
import { Direccion } from '../interfaces/territorio.direccion';
import { Territorio } from '../interfaces/territorio';

@Component({
    selector: 'territorios-main-page',
    templateUrl: 'main-page.component.html'
})

export class TerritoriosMainPageComponent {
  constructor( private territoriosService: TerritoriosService) { }

  get territorios(): Territorio[] {
    return [... this.territoriosService.territorios]
  }
  get direcciones(): Direccion[] {
    return [...this.territoriosService.direcciones];
  }

  borrarDireccion( id: string ): void {
    this.territoriosService.borrarDireccionById( id );
  }

  nuevaDireccion( direccion: Direccion ): void {
    this.territoriosService.agregarDireccion( direccion );
  }
}
