import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MaletasComponent } from './maletas/maletas/maletas.component';
import { MaletabarcoComponent } from './nuevamaleta/maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './nuevamaleta/maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './nuevamaleta/listadomaterial/listadomaterial.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./nuevamaleta/nuevamaleta.module').then((m) => m.NuevamaletaModule),
  },
  {
    path: 'maletas',
    component: MaletasComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
