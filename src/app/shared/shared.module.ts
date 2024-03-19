import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CargaImagenComponent } from './componentes/carga-imagen/carga-imagen.component';



@NgModule({
  declarations: [
    SidebarComponent,
    CargaImagenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CargaImagenComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
