import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletasComponent } from './maletas/maletas.component';
import { MaletabComponent } from './maletab/maletab.component';
import { MaletacComponent } from './maletac/maletac.component';

const routes: Routes = [
  {
    path: 'maletas',
    component: MaletasComponent
  },
  {
    path: 'maletab',
    component: MaletabComponent
  },
  {
    path: 'maletac',
    component: MaletacComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaletasRoutingModule {}
