import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListadoservicioService {
@Output() disparadorListado : EventEmitter<any> = new EventEmitter()
  constructor() { }
}
