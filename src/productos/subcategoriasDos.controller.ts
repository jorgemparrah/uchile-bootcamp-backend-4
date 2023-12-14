import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { SubcategoriaDosDto } from './dto/subcategoriaDos.dto';
import { SubcategoriasDosService } from './subcategoriasDos.service';

@ApiTags('Categorización')
@Controller('subcategoriasDos')
export class SubcategoriasDosController {
  constructor(private readonly subcategoriasDosService: SubcategoriasDosService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de subcategorias dos", type: SubcategoriaDosDto, isArray: true })
  async findAll(): Promise<SubcategoriaDosDto[]> {
    const resultado: SubcategoriaDosDto[] = await this.subcategoriasDosService.findAll();
    return resultado;
  }

  @Get("subcategoria/:idSubcategoria")
  @ApiParam({ name: 'idSubcategoria', description: 'Identificador de la subcategoria' })
  @ApiOkResponse({ description: "Lista de subcategorias dos por subcategoria", type: SubcategoriaDosDto, isArray: true })
  async buscarPorCategoria(@Param('idSubcategoria') idSubcategoria: string): Promise<SubcategoriaDosDto[]> {
    const resultado = await this.subcategoriasDosService.buscarPorSubcategoria(idSubcategoria);
    return resultado;
  }

}
