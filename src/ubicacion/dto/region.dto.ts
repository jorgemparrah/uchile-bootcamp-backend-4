import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class RegionDto {

  @ApiProperty({ description: 'Identificador de la región', example: 1 })
  id: string;

  @ApiProperty({ description: 'Nombre de la región', example: 'Maule' })
  nombre: string;

}
