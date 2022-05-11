import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maletacabina',
  templateUrl: './maletacabina.component.html',
  styleUrls: ['./maletacabina.component.css'],
})
export class MaletacabinaComponent implements OnInit {
  public maletaCabina = {altura: 0,anchura: 0, profundidad: 0, peso: 0 };
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
