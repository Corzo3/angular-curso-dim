import { Component, OnInit } from '@angular/core';
import { MaletaBarco } from '../models/maleta-barco';
@Component({
  selector: 'app-barco-form',
  templateUrl: './barco-form.component.html',
  styleUrls: ['./barco-form.component.css'],
})
export class BarcoFormComponent implements OnInit {
  constructor() {}
  public maletasBarco: MaletaBarco[] = [];
  maletaBarco: MaletaBarco = { id: '', fechaRecogida: '', peso: 0 };
  creada = false;
  mensaje = '';

  ngOnInit(): void {}
  mostrarAyuda() {
    alert(
      'La fecha que debe introducir es aproximadamente un mes antes de la fecha prevista para desplegar'
    );
  }

  public avisarCreada() {
    this.creada = true;
    this.mensaje = 'Se ha creado una nueva maleta de barco ';
  }

  borrarMensaje() {
    this.mensaje = '';
  }
}
