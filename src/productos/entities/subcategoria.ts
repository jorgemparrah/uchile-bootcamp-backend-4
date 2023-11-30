import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'subcategoria' })
export class Subcategoria {

  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  idCategoria: string;

  constructor(id: string, nombre: string, idCategoria: string) {
    this.id = id;
    this.nombre = nombre;
    this.idCategoria = idCategoria;
  }

}
