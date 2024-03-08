import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AgregarDireccionComponent } from "./components/agregar-direccion/agregar-direccion.component";
import { ListadoDireccionesComponent } from "./components/listado-direcciones/listado-direcciones.component";
import { ListadoTerritoriosComponent } from "./components/listado-territorios/listado-territorios.component";
import { TerritorioComponent } from "./components/territorio/territorio.component";
import { TerritoriosMainPageComponent } from "./pages/main-page.component";
import { TarjetaTerritorioComponent } from './components/tarjeta-territorio/tarjeta-territorio.component';

@NgModule({
  declarations: [
    AgregarDireccionComponent,
    ListadoDireccionesComponent,
    ListadoTerritoriosComponent,
    TerritoriosMainPageComponent,
    TerritorioComponent,
    TarjetaTerritorioComponent
    ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TerritoriosMainPageComponent,
  ]
})
export class TerritoriosModule{}
