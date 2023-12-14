import { ApiProperty } from "@nestjs/swagger";
import { IsNumberString, IsString } from "class-validator";

export class ComunaDto {

  @IsNumberString({}, { message: 'Debe ser un número en formato de cadena de caracteres'})
  @ApiProperty({ description: 'Identificador de la comuna', example: "01234" })
  id: string;

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre de la comuna', example: 'Santiago' })
  nombre: string;

}
