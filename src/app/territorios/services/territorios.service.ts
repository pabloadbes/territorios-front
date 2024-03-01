import { Injectable } from '@angular/core';
import { Direccion } from '../interfaces/territorio.direccion';
import { v4 as uuid } from "uuid";

@Injectable({providedIn: 'root'})

export class TerritoriosService {

  direcciones: Direccion[] = [{
    id: uuid(),
    calle: 'Aristóbulo del Valle',
    numero: 583,
    departamento: 'B'
  },{
    id: uuid(),
    calle: 'Las Higueritas',
    numero: 2080
  },{
    id: uuid(),
    calle: 'Huiñaj',
    numero: 18
  },{
    id: uuid(),
    calle: 'Manuel García Fernandez',
    numero: 290
  },{
    id: uuid(),
    calle: 'Albacete',
    numero: 2005,
    departamento: 'D',
    piso: '2'
  }]

  agregarDireccion(direccion: Direccion): void {
    const nuevaDireccion: Direccion = { id: uuid(), ...direccion }
    this.direcciones.push(nuevaDireccion);
  }

  borrarDireccionByYd( id: string ): void {
    this.direcciones = this.direcciones.filter( direccion => direccion.id !== id );
  }
}
