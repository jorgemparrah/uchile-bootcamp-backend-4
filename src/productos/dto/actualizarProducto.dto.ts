import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { CrearStockDto } from "./crearStock.dto";

export class ActualizarProductoDto {

  @IsOptional()
  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del producto', example: 'Producto 1' })
  nombre: string;

  @IsOptional()
  @IsString({ message: 'La categoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la categoría', example: 'ALIMENTACION' })
  idCategoria: string;

  @IsOptional()
  @IsString({ message: 'La subcategoría debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la subcategoría', example: 'ALIMENTO' })
  idSubcategoria: string;

  @IsOptional()
  @IsString({ message: 'La especie debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la especie', example: 'PERRO' })
  idEspecie: string;

  @IsOptional()
  @IsString({ message: 'La descripcion del producto debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Descripción del producto', example: 'Descripcion del producto' })
  descripcion: string;

  @IsOptional()
  @IsString({ message: 'El detalle del producto debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Detalle del producto', example: 'Detalle del producto' })
  detalle: string;

  @IsOptional()
  @IsString({ message: 'El nombre de la imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre del archivo de la imagen del producto', example: 'producto1.png' })
  nombreImagen: string;

  @IsOptional()
  @IsString({ message: 'La imagen debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Base 64 de la imagen del producto', example: 'BASE64' })
  imagen: string;

  @IsOptional()
  @ApiProperty({ description: 'Base 64 de la imagen del producto', type: CrearStockDto, isArray: true })
  stock: CrearStockDto[];

}
