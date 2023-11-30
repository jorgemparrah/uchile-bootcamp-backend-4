import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'categoria' })
export class Categoria {

  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

}
