import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { MaletasComponent } from './maletas/maletas/maletas.component';


const routes: Routes = [
  {
  path: "",
  loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "maletas",
    component: MaletasComponent,
    },
  {
  path: "not-found",
  component: NotFoundComponent,
  },
  {
  path: "**",
  redirectTo: "not-found",
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
