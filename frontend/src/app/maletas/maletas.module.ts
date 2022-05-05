import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaletasRoutingModule } from './maletas-routing.module';
import { MaletasComponent } from './maletas/maletas.component';


@NgModule({
  declarations: [
    MaletasComponent
  ],
  imports: [
    CommonModule,
    MaletasRoutingModule
  ]
})
export class MaletasModule { }
