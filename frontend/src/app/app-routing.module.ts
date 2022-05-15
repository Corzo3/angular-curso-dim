import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { MaletabComponent } from './nuevamaleta/maletab/maletab.component';
import { MaletacComponent } from './nuevamaleta/maletac/maletac.component';


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
    path: 'not-found',
    component: NotFoundComponent,
  },

  {
    path: 'maletab',
    component: MaletabComponent,
  },
  {
    path: 'maletac',
    component: MaletacComponent,
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
