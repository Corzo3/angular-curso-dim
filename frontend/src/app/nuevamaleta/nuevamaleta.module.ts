import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { NuevamaletaRoutingModule } from './nuevamaleta-routing.module';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MaletabarcoComponent,
    MaletacabinaComponent,
    ListadomaterialComponent,
  ],
  imports: [
    CommonModule,
    NuevamaletaRoutingModule, FormsModule,
  ]
})
export class NuevamaletaModule { }
