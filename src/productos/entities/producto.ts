import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Especie } from './especie';
import { Subcategoria } from './subcategoria';
import { Categoria } from './categoria';

@Entity({ name: 'producto' })
export class Producto {

  @PrimaryColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  idCategoria: string;
  @Column()
  idSubcategoria: string;
  @Column()
  idEspecie: string;
  @Column()
  precio: number;
  @Column()
  cantidad: number;
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

  constructor(id: number, nombre: string, idCategoria: string, idSubcategoria: string, idEspecie: string, precio: number, cantidad: number, imagen: string) {
    this.id = id;
    this.nombre = nombre;
    this.idCategoria = idCategoria;
    this.idSubcategoria = idSubcategoria;
    this.idEspecie = idEspecie;
    this.precio = precio;
    this.cantidad = cantidad;
    this.imagen = imagen;
  }

}
