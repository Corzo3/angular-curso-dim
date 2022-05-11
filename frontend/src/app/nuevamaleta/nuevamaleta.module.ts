import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NuevamaletaRoutingModule } from './nuevamaleta-routing.module';
import { MaletabarcoComponent } from './maletabarco/maletabarco.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './listadomaterial/listadomaterial.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MaletabarcoComponent,
    MaletacabinaComponent,
    ListadomaterialComponent,

  ],
  imports: [
    CommonModule,
    NuevamaletaRoutingModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
  ],
})
export class NuevamaletaModule {}
