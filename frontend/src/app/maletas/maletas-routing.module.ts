import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaletasComponent } from './maletas/maletas.component';

const routes: Routes = [
  {
    path: 'maletas',
    component: MaletasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaletasRoutingModule {}
