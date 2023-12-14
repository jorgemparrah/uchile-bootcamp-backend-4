import { ApiProperty } from "@nestjs/swagger";

export class SubcategoriaDosDto {

  @ApiProperty()
  id: string;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  idSubcategoria: string;

}
