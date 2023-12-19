import { ApiProperty } from "@nestjs/swagger";
import { TiendaDto } from "./tienda.dto";

export class StockDto {

  @ApiProperty({ type: TiendaDto })
  tienda: TiendaDto;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  cantidad: number;

}
