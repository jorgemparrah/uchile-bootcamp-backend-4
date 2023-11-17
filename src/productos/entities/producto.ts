export class Producto {

  id: number;
  nombre: string;
  descripcion: string;
  idCategoria: string;
  precio: number;

  constructor(id: number, nombre: string, descripcion: string, idCategoria: string, precio: number) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.idCategoria = idCategoria;
    this.precio = precio;
  }

}
