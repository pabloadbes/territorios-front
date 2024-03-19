import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-carga-imagen',
  templateUrl: './carga-imagen.component.html',
})
export class CargaImagenComponent implements OnInit {

  @Input()
  url!: string;

  @Input()
  alt: string = '';

  hasLoaded: boolean = false;

  ngOnInit(): void {
    if( !this.url ) throw new Error('URL de imagen vacía');
  }

  onLoad() {
    this.hasLoaded = true;
  }
}
