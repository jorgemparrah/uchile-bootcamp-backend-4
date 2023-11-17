import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsNumber, IsPositive, IsString } from "class-validator";

export class ProductoDto {

  @IsNumber({}, { message: 'Debe ser un número'})
  @IsPositive({ message: 'Debe ser un número positivo' })
  @ApiProperty({ description: 'Identificador del producto', example: 1 })
  id: number;

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del producto', example: 'Producto 1' })
  nombre: string;

  @IsString({ message: 'La descripción debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Descripción del producto', example: 'Descripción del producto 1'})
  descripcion: string;

  @IsAlpha("es-ES", { message: 'La categoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la categoría', example: 'ALIMENTACION' })
  idCategoria: string;

  @IsNumber({}, { message: 'Debe ser un número'})
  @IsPositive({ message: 'Debe ser un número positivo' })
  @ApiProperty({ description: 'Precio del producto', example: 100 })
  precio: number;

}
