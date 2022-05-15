import { Component, Input, OnInit, Output } from '@angular/core';
import { ElementoEquipo } from '../models/elemento';
import equipo from 'src/assets/equipo.json';
import { MaletaBarcoService } from '../service/maleta-barco-service';
import { MaletaBarco } from '../models/maleta-barco';
import { MaletaBarcoImpl } from '../models/maleta-barco-impl';
import { ListadoservicioService } from '../service/listadoservicio.service';
import { ElementoEquipoImpl } from '../models/elementoImpl';

@Component({
  selector: 'app-listadomaterial',
  templateUrl: './listadomaterial.component.html',
  styleUrls: ['./listadomaterial.component.css'],
})
export class ListadomaterialComponent implements OnInit {
  public elementos: ElementoEquipo[] = [];
  elementosSeleccionados: ElementoEquipo[] = [];
  elementosNuevos: ElementoEquipo[] = [];
  constructor(
    private maletaBarcoService: MaletaBarcoService,
    private listadoService: ListadoservicioService
  ) {}

  ngOnInit(): void {
    this.elementosSeleccionados = new Array<ElementoEquipo>();
  }

  public cargarLista() {
    this.elementos = equipo;
  }

  sumarCantidad(elemento: ElementoEquipo): void {
    elemento.cantidad++;
    this.maletaBarcoService.addToMaleta(elemento);
  }

  restarCantidad(elemento: ElementoEquipo): void {
    if (elemento.cantidad > 0) {
      elemento.cantidad--;
      this.maletaBarcoService.addToMaleta(elemento);
    }
  }

  verificarCantidad(elemento: ElementoEquipo) {
    if ((elemento.cantidad = 0)) {
      alert('Debe agregar al menos un elemento de este tipo');
    }
  }

  getNombreElemento(e: any, elemento: ElementoEquipo) {
    if (e.target.checked) {
      console.log(elemento.nombre + ' checked');
      this.elementosSeleccionados.push(elemento);
    } else {
      console.log(elemento.nombre + ' unchecked');
      this.elementosSeleccionados = this.elementosSeleccionados.filter(
        (m) => m != elemento
      );
    }

    console.log(this.elementosSeleccionados);
  }

  agregarElemento(e: any, elemento: ElementoEquipo) {
    this.elementosNuevos.push(elemento);
    console.log(this.elementosNuevos);
  }

  addElementoAListadoMaleta() {
    this.listadoService.disparadorListado.emit({
      elem: this.elementosSeleccionados,
    });
  }
}
