import { Component, OnInit } from '@angular/core';
import { ElementoEquipo } from '../models/elemento';
import { MaletaBarcoService } from '../service/maleta-barco-service';



@Component({
  selector: 'app-maletabarco',
  templateUrl: './maletabarco.component.html',
  styleUrls: ['./maletabarco.component.css']
})
export class MaletabarcoComponent implements OnInit {

  elementos : ElementoEquipo[] = []

  constructor(private maletaBarcoService: MaletaBarcoService) { }

  ngOnInit(): void {
    this.maletaBarcoService.elementosMaleta.subscribe
    (data => this.elementos = data)
  }
}
