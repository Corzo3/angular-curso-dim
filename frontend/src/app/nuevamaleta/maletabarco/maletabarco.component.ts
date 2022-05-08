import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css']
})
export class MaletabarcoComponent implements OnInit {


resultado: any;
peso = 2.5;


  constructor() { }

  ngOnInit(): void {
  }

  mostrarFecha(value:string){

  }

getFechaEntrega(fecha: string){
  this.resultado = moment(fecha).subtract(1, 'month')
  return this.resultado;
}




}
