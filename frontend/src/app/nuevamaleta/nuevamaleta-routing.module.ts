import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';

const routes: Routes = [
  { path: 'maletabarco', component: MaletabarcoComponent },
  { path: 'maletacabina', component: MaletacabinaComponent },
  { path: 'listadomaterial', component: ListadomaterialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevamaletaRoutingModule {}
