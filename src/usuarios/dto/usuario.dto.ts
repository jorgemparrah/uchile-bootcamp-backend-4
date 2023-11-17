import { ApiProperty } from "@nestjs/swagger";

export class UsuarioDto {

  @ApiProperty({ description: 'Identificador del usuario', example: 1 })
  rut: string;

  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'ejemplo@ejemplo.com' })
  email: string;

  @ApiProperty({ description: 'Nombre completo del usuario', example: 'Juan Pérez'})
  nombreCompleto: string;

  @ApiProperty({ description: 'Teléfono del usuario', example: '912345678' })
  telefono: string;

}
