import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CategoriasService } from './categorias.service';
import { CategoriaDto } from './dto/categoria.dto';

@ApiTags('Categorización')
@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de categorias", type: CategoriaDto, isArray: true })
  async findAll() : Promise<CategoriaDto[]> {
    const resultado : CategoriaDto[] = await this.categoriasService.findAll();
    return resultado;
  }

}
