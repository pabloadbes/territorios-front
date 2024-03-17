import { Injectable } from '@angular/core';
import { Direccion } from '../interfaces/territorio.direccion';
import { v4 as uuid } from "uuid";
import { Territorio } from '../interfaces/territorio';
import { HttpClient } from '@angular/common/http';
import { compileNgModule } from '@angular/compiler';

@Injectable({providedIn: 'root'})

export class TerritoriosService {

  private _territorios: Territorio[] = [];
  private _direcciones: Direccion[] = [];

  private _serviceUrl: string = 'http://ubuntu-java-mysql:8080/territorios'
  constructor( private http: HttpClient ) {

    this.http.get<Territorio[]>(`${this._serviceUrl}`)
      .subscribe( resp => {
        this._territorios = resp;
      })

/*
    this._territorios = [{
      idterritorios: uuid(),
      numero: 1,
      nombre: 'telefónico',
      smallImage: '/assets/mapa.jpeg',
      image: '/assets/mapa.jpeg'
    },{
      idterritorios: uuid(),
      numero: 2,
      nombre: 'la cantera',
      smallImage: '/assets/mapa.jpeg',
      image: '/assets/mapa.jpeg'
    },{
      idterritorios: uuid(),
      numero: 3,
      nombre: 'mishki mayu',
      smallImage: '/assets/mapa.jpeg',
      image: '/assets/mapa.jpeg'
    },{
      idterritorios: uuid(),
      numero: 4,
      nombre: 'quijote',
      smallImage: '/assets/mapa.jpeg',
      image: '/assets/mapa.jpeg'
    },{
      idterritorios: uuid(),
      numero: 5,
      nombre: 'la misión',
      smallImage: '/assets/mapa.jpeg',
      image: '/assets/mapa.jpeg'
    },{
      idterritorios: uuid(),
      numero: 6,
      nombre: 'pipo',
      smallImage: '/assets/mapa.jpeg',
      image: '/assets/mapa.jpeg'
    }];*/

    this._direcciones = [{
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
    }];
  }

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
