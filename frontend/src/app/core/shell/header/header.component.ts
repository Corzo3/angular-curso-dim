import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   accion() {
    var enlace = document.getElementsByClassName('enlace');
    for (var i = 0; i < enlace.length; i++) {
        enlace[i].classList.toggle('desaparece');
    }
}


}
