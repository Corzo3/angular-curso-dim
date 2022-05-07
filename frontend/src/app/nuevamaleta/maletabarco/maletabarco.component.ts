import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css']
})
export class MaletabarcoComponent implements OnInit {

fecha = "2022/03/10";
peso = 2.5;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarFecha(value:string){

  }

  getfecha(fecha:string){
    this.fecha = fecha;
  }

  setfecha(){

  }

}
