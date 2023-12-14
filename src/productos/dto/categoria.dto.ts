import { ApiProperty } from "@nestjs/swagger";

export class CategoriaDto {

  @ApiProperty()
  id: string;

  @ApiProperty()
  nombre: string;

}
