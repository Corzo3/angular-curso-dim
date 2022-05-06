import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletacabinaComponent } from '../maletacabina/maletacabina/maletacabina.component';

const routes: Routes = [{ path: 'maletabarco', component: MaletacabinaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaletcabinaRoutingModule { }
