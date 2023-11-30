import { ApiProperty } from "@nestjs/swagger";
import { IsEmail } from "class-validator";

export class AccesoDto {

  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'ejemplo@ejemplo.com' })
  fullName: string;

  @ApiProperty({ description: 'Clave del usuario', example: 'clave' })
  securePassword: string;

}
