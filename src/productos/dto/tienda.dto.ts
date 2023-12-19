import { ApiProperty } from "@nestjs/swagger";

export class TiendaDto {

  @ApiProperty()
  id: string;

  @ApiProperty()
  nombre: string;

}
