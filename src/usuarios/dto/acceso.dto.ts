import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class AccesoDto {

  @IsEmail({}, { message: 'El correo debe ser válido'})
  @ApiProperty({ description: 'Correo del usuario', example: 'usuario@ejemplo.com' })
  correo: string;

  @IsString({ message: 'La clave debe ser una cadena de texto' })
  @ApiProperty({ description: 'Clave del usuario', example: 'clave' })
  clave: string;

}
