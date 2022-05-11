import { Component, OnInit } from '@angular/core';
import equipo from 'src/assets/equipo.json'

@Component({
  selector: 'app-listadomaterial',
  templateUrl: './listadomaterial.component.html',
  styleUrls: ['./listadomaterial.component.css'],
})
export class ListadomaterialComponent implements OnInit {

  elementos: Elemento[] = [];

  constructor() {

  }

  ngOnInit(): void {}

  cargarLista(){
    this.elementos = equipo;
  }
}


export interface Elemento{
  nombre: string;
  peso: number;
}
