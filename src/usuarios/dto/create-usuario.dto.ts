import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, IsEmail, IsNumberString, IsString } from "class-validator";

export class CreateUsuarioDto {

  @IsString({ message: 'El RUT debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'RUT del usuario', example: '12345678-9'})
  rut: string;

  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  @ApiProperty({ description: 'Correo electrónico del usuario', example: 'ejemplo@ejemplo.com' })
  email: string;

  @ApiProperty({ description: 'Clave del usuario', example: 'clave' })
  clave: string;

  @IsString({ message: 'El nombre completo debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre completo del usuario', example: 'Juan Pérez' })
  nombreCompleto: string;

  @IsNumberString({}, { message: 'El teléfono debe ser un número' })
  @ApiProperty({ description: 'Teléfono del usuario', example: '912345678' })
  telefono: string;

}
