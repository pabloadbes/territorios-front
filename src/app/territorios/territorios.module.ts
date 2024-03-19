import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AgregarDireccionComponent } from "./components/agregar-direccion/agregar-direccion.component";
import { ListadoDireccionesComponent } from "./components/listado-direcciones/listado-direcciones.component";
import { ListadoTerritoriosComponent } from "./components/listado-territorios/listado-territorios.component";
import { TerritorioComponent } from "./components/territorio/territorio.component";
import { TerritoriosMainPageComponent } from "./pages/main-page.component";
import { TarjetaTerritorioComponent } from './components/tarjeta-territorio/tarjeta-territorio.component';
import { CargaImagenComponent } from "../shared/components/carga-imagen/carga-imagen.component";
import { SharedModule } from "../shared/shared.module";

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
    FormsModule,
    SharedModule
  ],
  exports: [
    TerritoriosMainPageComponent,
  ]
})
export class TerritoriosModule{}
