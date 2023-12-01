import { ApiProperty } from "@nestjs/swagger";

export class AccesoDto {

  @ApiProperty({ description: 'Rut del usuario', example: '12345678-9' })
  fullName: string;

  @ApiProperty({ description: 'Clave del usuario', example: 'clave' })
  securePassword: string;

}
