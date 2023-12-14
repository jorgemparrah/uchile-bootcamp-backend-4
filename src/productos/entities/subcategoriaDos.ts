import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'subcategoria_dos' })
export class SubcategoriaDos {

  @PrimaryColumn()
  id: string;

  @Column()
  nombre: string;

  @Column()
  idSubcategoria: string;

  constructor(id: string, nombre: string, idSubcategoria: string) {
    this.id = id;
    this.nombre = nombre;
    this.idSubcategoria = idSubcategoria;
  }

}
