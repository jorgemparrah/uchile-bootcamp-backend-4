import { ApiProperty } from "@nestjs/swagger";

export class RolDto {

  @ApiProperty({ description: 'Identificador del rol', example: "CLIENTE" })
  id: string;

  @ApiProperty({ description: 'Nombre del rol', example: 'Administrador'})
  nombre: string;

}
