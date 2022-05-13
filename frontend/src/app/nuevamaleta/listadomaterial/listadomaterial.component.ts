import { Component, Input, OnInit } from '@angular/core';
import { ElementoEquipo } from '../models/elemento';
import equipo from 'src/assets/equipo.json';
import { MaletaBarcoService } from '../service/maleta-barco-service';

@Component({
  selector: 'app-listadomaterial',
  templateUrl: './listadomaterial.component.html',
  styleUrls: ['./listadomaterial.component.css'],
})
export class ListadomaterialComponent implements OnInit {
  @Input() public elementos: ElementoEquipo[] = [];
  public formHidden = false;
  constructor(private maletaBarcoService: MaletaBarcoService ) {}

  ngOnInit(): void {}

  sumarCantidad(elemento: ElementoEquipo) : void {
    elemento.cantidad ++;
    this.maletaBarcoService.addToMaleta(elemento);
  }

  restarCantidad(elemento: ElementoEquipo) : void{
    if(elemento.cantidad > 0) {
      elemento.cantidad --;
      this.maletaBarcoService.addToMaleta(elemento);
    }
  }

  verificarCantidad(elemento: ElementoEquipo){
    if (elemento.cantidad < 0) {
      alert ("Debe agregar al menos un elemento de este tipo")
      elemento.cantidad = 0;
    }
  }
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
