import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsNumber, IsPositive, IsString } from "class-validator";

export class CrearProductoDto {

  @IsNumber({}, { message: 'Debe ser un número'})
  @IsPositive({ message: 'Debe ser un número positivo' })
  @ApiProperty({ description: 'Identificador del producto', example: 1 })
  id: number;

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del producto', example: 'Producto 1' })
  nombre: string;

  @IsAlpha("es-ES", { message: 'La categoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la categoría', example: 'ALIMENTACION' })
  idCategoria: string;

  @IsAlpha("es-ES", { message: 'La subcategoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la subcategoría', example: 'ALIMENTO' })
  idSubcategoria: string;


  @IsAlpha("es-ES", { message: 'La expecie debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la especie', example: 'PERRO' })
  idEspecie: string;

  @IsNumber({}, { message: 'Debe ser un número'})
  @IsPositive({ message: 'Debe ser un número positivo' })
  @ApiProperty({ description: 'Precio del producto', example: 100 })
  precio: number;

  @IsNumber({}, { message: 'Debe ser un número'})
  @IsPositive({ message: 'Debe ser un número positivo' })
  @ApiProperty({ description: 'Cantidad del producto en stock', example: 20 })
  cantidad: number;

  @IsString({ message: 'El nombre de la imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del archivo de la imagen del producto', example: 'producto1.png' })
  imagen: string;

  @IsString({ message: 'La imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Base 64 de la imagen del producto', example: 'BASE64' })
  imagenBase64: string;

}
