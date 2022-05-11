import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaletasRoutingModule } from './maletas-routing.module';
import { MaletasComponent } from './maletas/maletas.component';
import { MaletabComponent } from './maletab/maletab.component';
import { MaletacComponent } from './maletac/maletac.component';


@NgModule({
  declarations: [
    MaletasComponent,
    MaletabComponent,
    MaletacComponent
  ],
  imports: [
    CommonModule,
    MaletasRoutingModule
  ]
})
export class MaletasModule { }
