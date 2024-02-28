import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TerritorioComponent } from "./components/territorio/territorio.component";
import { ListadoDireccionesComponent } from "./components/listado-direcciones/listado-direcciones.component";
import { ListadoTerritoriosComponent } from "./components/listado-territorios/listado-territorios.component";

@NgModule({
  declarations: [
    ListadoDireccionesComponent,
    ListadoTerritoriosComponent,
    TerritorioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoDireccionesComponent,
    ListadoTerritoriosComponent,
    TerritorioComponent
  ]
})
export class territoriosModule{}
