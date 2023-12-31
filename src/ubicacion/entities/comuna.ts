import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'comuna' })
export class Comuna {

  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  idRegion: string;

  constructor(id: string, nombre: string, idRegion: string) {
    this.id = id;
    this.nombre = nombre;
    this.idRegion = idRegion;
  }

}
