import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm"
import { Rol } from "./rol";
@Entity({ name: 'usuario' })
export class Usuario {

  @PrimaryColumn()
  rut: string;

  @Column()
  email: string;

  @Column()
  clave: string;

  @Column()
  nombreCompleto: string;

  @Column()
  telefono: string;

  @ManyToMany(() => Rol)
  @JoinTable({ name: 'usuario_rol' })
  roles: Rol[];

  constructor(rut: string, email: string, clave: string, nombreCompleto: string, telefono: string) {
    this.rut = rut;
    this.email = email;
    this.clave = clave;
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
  }

}
