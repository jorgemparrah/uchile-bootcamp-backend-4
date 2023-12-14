import { Comuna } from "src/ubicacion/entities/comuna";

export class Peluqueria {

  id: number;
  nombre: string;
  idComuna: string;
  comuna: Comuna;

  constructor(id: number, idComuna: string, nombre: string) {
    this.id = id;
    this.idComuna = idComuna;
    this.nombre = nombre;
  }

}
