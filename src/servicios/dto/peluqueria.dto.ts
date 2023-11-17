import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsPositive, IsString } from "class-validator";
import { ComunaDto } from "src/ubicacion/dto/comuna.dto";

export class PeluqueriaDto {

  @IsNumber({}, { message: 'Debe ser un número'})
  @IsPositive({ message: 'Debe ser un número positivo' })
  @ApiProperty({ description: 'Identificador de la peluquería', example: 1 })
  id: number;

  @IsString({ message: 'El nombre debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre de la peluquería', example: 'Peluquería 1'})
  nombre: string;
  
  @ApiProperty({ description: 'Comuna donde se ubica la peluqueria', type: ComunaDto })
  comuna: ComunaDto;

}
