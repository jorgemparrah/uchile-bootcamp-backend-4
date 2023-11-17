import { Comuna } from "src/ubicacion/entities/comuna";

export class Peluqueria {

  id: number;
  nombre: string;
  idComuna: number;
  comuna: Comuna;

  constructor(id: number, idComuna: number, nombre: string) {
    this.id = id;
    this.idComuna = idComuna;
    this.nombre = nombre;
  }

}
