import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maletacabina',
  templateUrl: './maletacabina.component.html',
  styleUrls: ['./maletacabina.component.css'],
})
export class MaletacabinaComponent implements OnInit {
  longitud = 60;
  anchura = 40;
  altura = 20;
  peso = 1.5;
  creada=false;
  mensaje = "";
  constructor() {}

  ngOnInit(): void {}

  crearMaletaCabina(){
    this.creada = true;
    this.mensaje = "Se ha creado una nueva maleta de cabina "
    }

    borrarMensaje(){
      this.mensaje="";
    }

}
