import { Controller, Get, Param } from '@nestjs/common';
import { PeluqueriaDto } from './dto/peluqueria.dto';
import { PeluqueriasService } from './peluquerias.service';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Servicios')
@Controller('peluquerias')
export class PeluqueriasController {
  constructor(private readonly peluqueriasService: PeluqueriasService) {}

  @Get('comuna/:idComuna')
  @ApiParam({ name: 'idComuna', description: 'Identificador de la comuna' })
  @ApiOkResponse({ description: "Lista de peluquerias por comuna", type: PeluqueriaDto, isArray: true })
  buscarPorComuna(@Param('idComuna') idComuna: string): PeluqueriaDto[] {
    return this.peluqueriasService.buscarPorComuna(idComuna);
  }
}
