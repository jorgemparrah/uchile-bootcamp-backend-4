import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class ComunaDto {

  @IsNumber({}, { message: 'Debe ser un número'})
  @ApiProperty({ description: 'Identificador de la comuna', example: 1 })
  id: number;

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre de la comuna', example: 'Santiago' })
  nombre: string;

}
