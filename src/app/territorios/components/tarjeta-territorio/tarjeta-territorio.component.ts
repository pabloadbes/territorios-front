import { Component, Input, OnInit } from '@angular/core';
import { Territorio } from '../../interfaces/territorio';

@Component({
  selector: 'territorios-tarjeta-territorio',
  templateUrl: './tarjeta-territorio.component.html',
})
export class TarjetaTerritorioComponent implements OnInit {
  @Input()
  territorio!: Territorio;

  ngOnInit(): void {
    if( !this.territorio ) throw new Error('Territorio es requerido!')
  }
}
