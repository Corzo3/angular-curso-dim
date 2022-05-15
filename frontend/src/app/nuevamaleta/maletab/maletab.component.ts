import { Component, OnInit } from '@angular/core';
import equipo from 'src/assets/equipo.json';
import { ElementoEquipo } from 'src/app/nuevamaleta/models/elemento';
import { ListadoservicioService } from '../service/listadoservicio.service';
@Component({
  selector: 'app-maletab',
  templateUrl: './maletab.component.html',
  styleUrls: ['./maletab.component.css'],
})
export class MaletabComponent implements OnInit {
  constructor(private listadoServicio: ListadoservicioService) {}
  public elementosSeleccionados: ElementoEquipo[] = [];

  ngOnInit(): void {
    this.listadoServicio.disparadorListado.subscribe((elem) => {
      this.elementosSeleccionados.push(elem);
    });
  }
  mostrarContenido() {
    alert('El contenido de la maleta es: elemento1, elemento2, elemento3');
  }
}
