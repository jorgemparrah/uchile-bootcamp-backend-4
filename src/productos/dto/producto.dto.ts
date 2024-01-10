import { ApiProperty } from "@nestjs/swagger";
import { StockDto } from "./stock.dto";

export class ProductoDto {

  @ApiProperty({ description: 'Id del producto', example: 'a25b63ab-2cdf-42f0-913c-c519f05896c3' })
  id: string;

  @ApiProperty({ description: 'Nombre del producto', example: 'Correa' })
  nombre: string;

  @ApiProperty({ description: 'Nombre de la categoría', example: 'Accesorios' })
  categoria: string;

  @ApiProperty({ description: 'Nombre de la subcategoría', example: 'Transporte y seguridad' })
  subcategoria: string;

  @ApiProperty({ description: 'Tipo de especie', example: 'Perros' })
  especie: string;

  @ApiProperty({ description: 'Descripcion del producto', example: 'Descripcion' })
  descripcion: string;

  @ApiProperty({ description: 'Detalle del producto', example: 'Detalle' })
  detalle: string;

  @ApiProperty({ description: 'Precio de venta', example: 50000 })
  precio: number;

  @ApiProperty({ description: 'Cantidad disponible', example: 5 })
  cantidad: number;

  @ApiProperty({ description: 'Imagen del producto', example: '/2020/10/Correa-para-perros-1.jpg' })
  imagen: string;

  @ApiProperty({ description: 'Tiendas con stock', type: StockDto, isArray: true })
  stock: StockDto[];


}
