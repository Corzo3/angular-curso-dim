import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
const routes: Routes = [{ path: 'maletabarco', component: MaletabarcoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaletabarcoRoutingModule { }
