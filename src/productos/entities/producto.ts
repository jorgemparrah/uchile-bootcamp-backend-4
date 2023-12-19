import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Especie } from './especie';
import { Subcategoria } from './subcategoria';
import { Categoria } from './categoria';
import { Stock } from './stock';

@Entity({ name: 'producto' })
export class Producto {

  @PrimaryColumn()
  id: string;
  @Column()
  nombre: string;
  @Column()
  idCategoria: string;
  @Column()
  idSubcategoria: string;
  @Column()
  idEspecie: string;
  @Column()
  descripcion: string;
  @Column()
  detalle: string;
  @Column()
  imagen: string;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'idCategoria' })
  categoria: Categoria;

  @ManyToOne(() => Subcategoria)
  @JoinColumn({ name: 'idSubcategoria' })
  subcategoria: Subcategoria;

  @ManyToOne(() => Especie)
  @JoinColumn({ name: 'idEspecie' })
  especie: Especie;

  @OneToMany(() => Stock, stock => stock.producto)
  stock: Stock[];

  constructor(id: string, nombre: string, idCategoria: string, idSubcategoria: string, idEspecie: string, descripcion: string, detalle: string, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.idCategoria = idCategoria;
    this.idSubcategoria = idSubcategoria;
    this.idEspecie = idEspecie;
    this.descripcion = descripcion;
    this.detalle = detalle;
    this.imagen = imagen;
  }

}
