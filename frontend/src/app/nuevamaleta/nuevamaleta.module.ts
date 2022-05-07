import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NuevamaletaRoutingModule } from './nuevamaleta-routing.module';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';


@NgModule({
  declarations: [
    MaletabarcoComponent,
    MaletacabinaComponent,
    ListadomaterialComponent
  ],
  imports: [
    CommonModule,
    NuevamaletaRoutingModule
  ]
})
export class NuevamaletaModule { }
