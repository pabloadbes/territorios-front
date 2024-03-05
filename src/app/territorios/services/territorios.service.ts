import { Injectable } from '@angular/core';
import { Direccion } from '../interfaces/territorio.direccion';
import { v4 as uuid } from "uuid";
import { Territorio } from '../interfaces/territorio';

@Injectable({providedIn: 'root'})

export class TerritoriosService {

  private _territorios: Territorio[] = [{
    id: uuid(),
    numero: 1,
    nombre: 'telefónico'
  },{
    id: uuid(),
    numero: 2,
    nombre: 'la cantera'
  },{
    id: uuid(),
    numero: 3,
    nombre: 'mishki mayu'
  },{
    id: uuid(),
    numero: 4,
    nombre: 'quijote'
  },{
    id: uuid(),
    numero: 5,
    nombre: 'la misión'
  },{
    id: uuid(),
    numero: 6,
    nombre: 'pipo'
  }];

  private _direcciones: Direccion[] = [{
    id: uuid(),
    calle: 'aristóbulo del valle',
    numero: 583,
    departamento: 'B'
  },{
    id: uuid(),
    calle: 'las higueritas',
    numero: 2080
  },{
    id: uuid(),
    calle: 'huiñaj',
    numero: 18
  },{
    id: uuid(),
    calle: 'manuel garcía fernandez',
    numero: 290
  },{
    id: uuid(),
    calle: 'albacete',
    numero: 2005,
    departamento: 'D',
    piso: '2'
  }]

  get territorios(): Territorio[] {
    return [...this._territorios];  
  }

  get direcciones(): Direccion[] {
    return [...this._direcciones];
  }

  agregarDireccion(direccion: Direccion): void {
    const nuevaDireccion: Direccion = { id: uuid(), ...direccion }
    this.direcciones.push(nuevaDireccion);
  }

  borrarDireccionById( id: string ): void {
    this._direcciones = this._direcciones.filter( direccion => direccion.id !== id );
  }
}
