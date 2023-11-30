import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'comuna' })
export class Comuna {

  @PrimaryColumn({ name: 'id' })
  id: number;

  @Column({ name: 'nombre' })
  nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

}
