import { ElementoEquipo } from './elemento';

export class ElementoEquipoImpl implements ElementoEquipo {
  id: string = '';
  nombre: string = '';
  peso: number = 0;
  cantidad: number = 0;
  constructor() {}
}
