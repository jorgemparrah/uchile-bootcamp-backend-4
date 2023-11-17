import { ApiProperty } from "@nestjs/swagger";

export class SubcategoriaDto {

  @ApiProperty()
  id: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  idCategoria: string;

}
