import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Direccion } from '../../interfaces/territorio.direccion';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-territorios-listado-direcciones',
  templateUrl: './listado-direcciones.component.html',
  styleUrl: './listado-direcciones.component.css'
})
export class ListadoDireccionesComponent {

  @Input()
  listadoDirecciones?: Direccion[];

  @Output()
  onBorrarDireccion: EventEmitter<string> = new EventEmitter();

  borrarDireccion(id:string): void {
    if( !id ) return;
    this.onBorrarDireccion.emit(id);
  }
}
