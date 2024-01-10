import { ApiProperty } from "@nestjs/swagger";

export class ProductoCatalogoDto {

  @ApiProperty({ description: 'Id del producto', example: 'a25b63ab-2cdf-42f0-913c-c519f05896c3' })
  id: string;

  @ApiProperty({ description: 'Nombre del producto', example: 'Correa' })
  nombre: string;

  @ApiProperty({ description: 'Ruta imagen del producto', example: 'src/imagen/.....' })
  imagen: string;

  @ApiProperty({ description: 'Precio de venta - Desde', example: 50000 })
  precio: number;

}
