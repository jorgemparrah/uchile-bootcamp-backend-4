import { ApiProperty } from "@nestjs/swagger";

export class ProductoDto {

  @ApiProperty({ description: 'Nombre del producto', example: 'Correa' })
  nombre: string;

  @ApiProperty({ description: 'Nombre de la categoría', example: 'Accesorios' })
  categoria: string;

  @ApiProperty({ description: 'Nombre de la subcategoría', example: 'Transporte y seguridad' })
  subcategoria: string;

  @ApiProperty({ description: 'Tipo de especie', example: 'Perros' })
  especie: string;

  @ApiProperty({ description: 'Precio de venta', example: 50000 })
  precio: number;

  @ApiProperty({ description: 'Cantidad disponible', example: 5 })
  cantidad: number;

  @ApiProperty({ description: 'Imagen del producto', example: '/2020/10/Correa-para-perros-1.jpg' })
  imagen: string;


}
