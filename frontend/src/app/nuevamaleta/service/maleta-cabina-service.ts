import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementoEquipo } from '../models/elemento';

@Injectable({
  providedIn: 'root',
})
export class MaletaCabinaService {
  private elementos: ElementoEquipo[] = [];
  private elementosSubjects: BehaviorSubject<ElementoEquipo[]> =
    new BehaviorSubject(this.elementos);
  public elementosMaleta: Observable<ElementoEquipo[]> =
    this.elementosSubjects.asObservable();

  constructor() {}

  addToMaleta(elemento: ElementoEquipo) {
    let indice = this.elementos.findIndex((e) => e.nombre === elemento.nombre);
    if (indice === -1) this.elementos.push(elemento);
    else this.elementos[indice].cantidad = elemento.cantidad;
    if (elemento.cantidad == 0) {
      this.elementos.splice(indice, 1);
    }
  }
}

