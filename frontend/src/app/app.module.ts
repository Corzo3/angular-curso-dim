import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ShellComponent } from './core/shell/shell.component';
import { HeaderComponent } from './core/shell/header/header.component';
import { MainComponent } from './core/shell/main/main.component';
import { FooterComponent } from './core/shell/footer/footer.component';
import { MaletacabinaComponent } from './maletacabina/maletacabina/maletacabina.component';
import { ListadomaterialComponent } from './maletabarco/listadomaterial/listadomaterial.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ShellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    MaletacabinaComponent,
    ListadomaterialComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
