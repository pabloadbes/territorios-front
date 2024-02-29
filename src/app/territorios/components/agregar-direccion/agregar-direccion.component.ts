import { Component, EventEmitter, Output } from '@angular/core';
import { Direccion } from '../../interfaces/territorio.direccion';

@Component({
  selector: 'app-territorios-agregar-direccion',
  templateUrl: './agregar-direccion.component.html',
  styleUrl: './agregar-direccion.component.css',
})
export class AgregarDireccionComponent {

  @Output()
  onNuevaDireccion: EventEmitter<Direccion> = new EventEmitter();

  direccion: Direccion = {
    calle: '',
    numero: 0,
  }

  emitirDireccion():void {
    if(this.direccion.calle.length === 0) return;

    this.onNuevaDireccion.emit({...this.direccion});

    this.direccion.calle = '';
    this.direccion.numero = 0;
    this.direccion.departamento = '';
    this.direccion.piso = '';
  }
 }
