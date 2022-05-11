import { Component, OnInit } from '@angular/core';
import { MaletaBarco } from '../models/maleta-barco';

@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css']
})
export class MaletabarcoComponent implements OnInit {

public maletasBarco: MaletaBarco[] = [];
maletaBarco: MaletaBarco = {id:"", fechaRecogida : "", peso:0}

creada = false;
mensaje = "";

  constructor() { }

  ngOnInit(): void {
  }

  mostrarFecha(value:string){

  }
mostrarAyuda(){
  alert("La fecha que debe introducir es aproximadamente un mes antes de la fecha prevista para desplegar")
}

public avisarCreada(){
this.creada = true;
this.mensaje = "Se ha creado una nueva maleta de barco "
}

borrarMensaje(){
  this.mensaje="";
}


}
