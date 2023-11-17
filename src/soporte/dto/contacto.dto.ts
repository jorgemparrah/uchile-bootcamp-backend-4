import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class ContactoDto {

  @IsString({ message: 'El nombre completo debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Nombre completo del usuario que envía la solicitud de contacto', example: 'Juan Pérez' })
  nombreCompleto: string;

  @IsEmail({}, { message: 'El correo electrónico debe ser válido' })
  @ApiProperty({ description: 'Correo electrónico del usuario que envía la solicitud de contacto', example: 'juan.perez@gmail.com' })
  email: string;

  @IsString({ message: 'El asunto debe ser una cadena de caracteres' })
  @ApiProperty({ description: 'Mensaje con la solicitud', example: 'Asunto para contacto' })
  mensaje: string;

}
