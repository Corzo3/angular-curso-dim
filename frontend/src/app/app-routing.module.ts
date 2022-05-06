import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MaletasComponent } from './maletas/maletas/maletas.component';
import { MaletabarcoComponent } from './maletabarco/maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina/maletacabina.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'maletabarco', component: MaletabarcoComponent },
  { path: 'maletacabina', component: MaletacabinaComponent },
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
