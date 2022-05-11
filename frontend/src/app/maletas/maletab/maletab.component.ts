import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maletab',
  templateUrl: './maletab.component.html',
  styleUrls: ['./maletab.component.css']
})
export class MaletabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mostrarContenido(){
    alert("El contenido de la maleta es: elemento1, elemento2, elemento3")
  }
}
