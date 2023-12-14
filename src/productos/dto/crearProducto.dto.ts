import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString, IsString } from "class-validator";

export class CrearProductoDto {

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del producto', example: 'Producto 1' })
  nombre: string;

  @IsString({ message: 'La categoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la categoría', example: 'ALIMENTACION' })
  categoria: string;

  @IsString({ message: 'La subcategoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la subcategoría', example: 'ALIMENTO' })
  subcategoria: string;

  @IsString({ message: 'La expecie debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la especie', example: 'PERRO' })
  especie: string;

  @IsNumberString({}, { message: 'precio debe ser un número'})
  @ApiProperty({ description: 'Precio del producto', example: 100 })
  precio: number;

  @IsNumberString({}, { message: 'cantidad debe ser un número'})
  @ApiProperty({ description: 'Cantidad del producto en stock', example: 20 })
  cantidad: number;

  @IsString({ message: 'El nombre de la imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del archivo de la imagen del producto', example: 'producto1.png' })
  nombreImagen: string;

  @IsString({ message: 'La imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Base 64 de la imagen del producto', example: 'BASE64' })
  imagen: string;

}
