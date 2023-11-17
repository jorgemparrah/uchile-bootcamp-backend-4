import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProductoDto } from './dto/producto.dto';
import { SubcategoriasService } from './subcategorias.service';

@ApiTags('Subcategorias')
@Controller('subcategorias')
export class SubcategoriasController {
  constructor(private readonly subcategoriasService: SubcategoriasService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de subcategorias", type: ProductoDto, isArray: true })
  findAll() {
    return this.subcategoriasService.findAll();
  }

  @Get("categoria/:idCategoria")
  @ApiParam({ name: 'idCategoria', description: 'Identificador de la categoria' })
  @ApiOkResponse({ description: "Lista de subcategorias por categoria", type: ProductoDto, isArray: true })
  buscarPorCategoria(@Param('idCategoria') idCategoria: string) {
    return this.subcategoriasService.buscarPorCategoria(idCategoria);
  }

}
