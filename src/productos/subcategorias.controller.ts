import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { SubcategoriaDto } from './dto/subcategoria.dto';
import { SubcategoriasService } from './subcategorias.service';

@ApiTags('Categorización')
@Controller('subcategorias')
export class SubcategoriasController {
  constructor(private readonly subcategoriasService: SubcategoriasService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de subcategorias", type: SubcategoriaDto, isArray: true })
  async findAll() : Promise<SubcategoriaDto[]> {
    const resultado : SubcategoriaDto[] = await this.subcategoriasService.findAll();
    return resultado;
  }

  @Get("categoria/:idCategoria")
  @ApiParam({ name: 'idCategoria', description: 'Identificador de la categoria' })
  @ApiOkResponse({ description: "Lista de subcategorias por categoria", type: SubcategoriaDto, isArray: true })
  async buscarPorCategoria(@Param('idCategoria') idCategoria: string) : Promise<SubcategoriaDto[]> {
    const resultado : SubcategoriaDto[] = await this.subcategoriasService.buscarPorCategoria(idCategoria);
    return resultado;
  }

}
