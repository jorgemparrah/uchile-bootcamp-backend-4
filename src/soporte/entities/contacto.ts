import { ApiProperty } from "@nestjs/swagger";

export class Contacto {

  @ApiProperty()
  nombreCompleto: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  mensaje: string;

}
