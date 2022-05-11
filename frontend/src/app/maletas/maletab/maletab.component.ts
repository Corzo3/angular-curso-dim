import { Component, OnInit } from '@angular/core';
import equipo from 'src/assets/equipo.json'
@Component({
  selector: 'app-maletab',
  templateUrl: './maletab.component.html',
  styleUrls: ['./maletab.component.css']
})
export class MaletabComponent implements OnInit {

  elementos: Elemento[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  mostrarContenido(){
    alert("El contenido de la maleta es: elemento1, elemento2, elemento3")
  }
  cargarLista(){
    this.elementos = equipo;
  }
}

export interface Elemento{
  nombre: string;
  peso: number;
}

