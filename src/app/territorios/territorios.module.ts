import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TerritorioComponent } from "./components/territorio/territorio.component";
import { ListadoDireccionesComponent } from "./components/listado-direcciones/listado-direcciones.component";
import { ListadoTerritoriosComponent } from "./components/listado-territorios/listado-territorios.component";
import { TerritoriosMainPageComponent } from "./pages/main-page.component";
import { AgregarDireccionComponent } from "./components/agregar-direccion/agregar-direccion.component";

@NgModule({
  declarations: [
    AgregarDireccionComponent,
    ListadoDireccionesComponent,
    ListadoTerritoriosComponent,
    TerritoriosMainPageComponent,
    TerritorioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TerritoriosMainPageComponent,
  ]
})
export class territoriosModule{}
