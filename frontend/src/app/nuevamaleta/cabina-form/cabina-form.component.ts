import { Component, OnInit } from '@angular/core';
import { MaletaCabina } from '../models/maleta-cabina';
@Component({
  selector: 'app-cabina-form',
  templateUrl: './cabina-form.component.html',
  styleUrls: ['./cabina-form.component.css'],
})
export class CabinaFormComponent implements OnInit {
  public maletasCabina: MaletaCabina[] = [];
  maletaCabina: MaletaCabina = {
    id: '',
    altura: 0,
    anchura: 0,
    profundidad: 0,
    peso: 0,
  };
  creada = false;
  mensaje = '';
  constructor() {}

  ngOnInit(): void {}

  public saveMaletaCabina() {
    this.maletasCabina.push({ ...this.maletaCabina });
  }

  public avisarCreada() {
    this.creada = true;
    this.mensaje = 'Se ha creado una nueva maleta de cabina ';
  }

  borrarMensaje() {
    this.mensaje = '';
  }
}
