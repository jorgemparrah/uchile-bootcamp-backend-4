import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";

export class CrearStockDto {

  @IsString({ message: 'El identificador debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Identificador de la tienda', example: 'TIENDA1' })
  idTienda: string;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 }, { message: 'El precio debe ser un número entero' })
  @IsPositive({ message: 'El precio debe ser un número positivo' })
  @ApiProperty({ description: 'Precio del producto en la tienda', example: 15000, minimum: 1 })
  precio: number;

  @IsNumber({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 0 }, { message: 'La cantidad debe ser un número entero' })
  @IsPositive({ message: 'El precio debe ser un número positivo' })
  @ApiProperty({ description: 'Cantidad de productos en la tienda', example: 10, minimum: 0 })
  cantidad: number;

}
