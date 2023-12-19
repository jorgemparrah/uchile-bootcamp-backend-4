import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Producto } from './producto';
import { Tienda } from './tienda';

@Entity({ name: 'stock' })
export class Stock {

  @PrimaryColumn()
  idProducto: string;
  @PrimaryColumn()
  idTienda: string;
  @Column()
  precio: number;
  @Column()
  cantidad: number;

  @ManyToOne(() => Producto)
  @JoinColumn({ name: 'idProducto' })
  producto: Producto;

  @ManyToOne(() => Tienda)
  @JoinColumn({ name: 'idTienda' })
  tienda: Tienda;

  constructor(idProducto: string, idTienda: string, precio: number, cantidad: number) {
    this.idProducto = idProducto;
    this.idTienda = idTienda;
    this.precio = precio;
    this.cantidad = cantidad;
  }

}
