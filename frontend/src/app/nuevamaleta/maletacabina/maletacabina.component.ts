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
  constructor() {}

  ngOnInit(): void {}
}
