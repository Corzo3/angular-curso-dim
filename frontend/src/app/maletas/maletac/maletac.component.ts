import { Component, OnInit } from '@angular/core';
import equipo from 'src/assets/equipo.json'

@Component({
  selector: 'app-maletac',
  templateUrl: './maletac.component.html',
  styleUrls: ['./maletac.component.css']
})
export class MaletacComponent implements OnInit {

  elementos: Elemento[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  cargarLista(){
    this.elementos = equipo;
  }

}

export interface Elemento{
  nombre: string;
  peso: number;
}
