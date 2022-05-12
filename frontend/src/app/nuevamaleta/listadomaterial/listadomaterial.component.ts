import { Component, OnInit } from '@angular/core';
import { ElementoEquipo } from '../models/elemento';
import equipo from 'src/assets/equipo.json';

@Component({
  selector: 'app-listadomaterial',
  templateUrl: './listadomaterial.component.html',
  styleUrls: ['./listadomaterial.component.css'],
})
export class ListadomaterialComponent implements OnInit {
  public elementos: ElementoEquipo[] = [];
  public formHidden = false;
  constructor() {}

  ngOnInit(): void {}

  public cargarLista() {
    this.elementos = equipo;
  }

  public mostrarFormulario(){
    this.formHidden = false;
  }
  public ocultarFormulario(){
    this.formHidden = true;
  }
}
