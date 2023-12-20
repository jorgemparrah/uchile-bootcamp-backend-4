import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TiendaDto } from './dto/tienda.dto';
import { TiendasService } from './tiendas.service';

@ApiTags('Productos')
@Controller('tiendas')
export class TiendasController {
  constructor(private readonly tiendasService: TiendasService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de tiendas", type: TiendaDto, isArray: true })
  async findAll() {
    return await this.tiendasService.findAll();
  }
}
