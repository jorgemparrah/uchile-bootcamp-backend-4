import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { RegionesService } from './regiones.service';
import { RegionDto } from './dto/region.dto';

@ApiTags('Ubicacion')
@Controller('regiones')
export class RegionesController {
  constructor(private readonly regionesService: RegionesService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de regiones", type: RegionDto, isArray: true })
  async findAll() {
    return await this.regionesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', description: 'Identificador de la region' })
  @ApiOkResponse({ description: "Datos de la region", type: RegionDto })
  async findOne(@Param('id') id: string): Promise<RegionDto> {
    return await this.regionesService.findOne(id);
  }

}
