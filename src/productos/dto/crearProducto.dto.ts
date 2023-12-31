import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { CrearStockDto } from "./crearStock.dto";

export class CrearProductoDto {

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del producto', example: 'Producto 1' })
  nombre: string;

  @IsString({ message: 'La categoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la categoría', example: 'ALIMENTACION' })
  idCategoria: string;

  @IsString({ message: 'La subcategoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la subcategoría', example: 'ALIMENTO' })
  idSubcategoria: string;

  @IsString({ message: 'La especie debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la especie', example: 'PERRO' })
  idEspecie: string;

  @IsString({ message: 'La descripcion del producto debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Descripción del producto', example: 'Descripcion del producto' })
  descripcion: string;

  @IsString({ message: 'El detalle del producto debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Detalle del producto', example: 'Detalle del producto' })
  detalle: string;

  @IsString({ message: 'El nombre de la imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del archivo de la imagen del producto', example: 'producto1.png' })
  nombreImagen: string;

  @IsString({ message: 'La imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Base 64 de la imagen del producto', example: 'BASE64' })
  imagen: string;

  @IsOptional()
  @ApiProperty({ description: 'Base 64 de la imagen del producto', type: CrearStockDto, isArray: true })
  stock: CrearStockDto[];

}
