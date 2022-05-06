import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaletabarcoRoutingModule } from './maletabarco-routing.module';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';


@NgModule({
  declarations: [
    MaletabarcoComponent
  ],
  imports: [
    CommonModule,
    MaletabarcoRoutingModule
  ]
})
export class MaletabarcoModule { }
