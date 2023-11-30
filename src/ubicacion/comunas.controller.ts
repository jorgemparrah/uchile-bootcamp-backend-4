import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ComunasService } from './comunas.service';
import { ComunaDto } from './dto/comuna.dto';

@ApiTags('Ubicacion')
@Controller('comunas')
export class ComunasController {
  constructor(private readonly comunasService: ComunasService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de comunas", type: ComunaDto, isArray: true })
  async findAll() {
    return await this.comunasService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Identificador de la comuna' })
  @ApiOkResponse({ description: "Datos de la comuna", type: ComunaDto })
  async findOne(@Param('id') id: string): Promise<ComunaDto> {
    return await this.comunasService.findOne(+id);
  }

}
