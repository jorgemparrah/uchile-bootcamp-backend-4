import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name: 'rol' })
export class Rol {

  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  constructor(id: string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

}
