import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProductoDto } from './dto/producto.dto';
import { ProductosService } from './productos.service';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de productos", type: ProductoDto, isArray: true })
  findAll() {
    return this.productosService.findAll();
  }

  @Get("categoria/:idCategoria")
  @ApiParam({ name: 'idCategoria', description: 'Identificador de la categoria' })
  @ApiOkResponse({ description: "Lista de productos por categoria", type: ProductoDto, isArray: true })
  buscarPorCategoria(@Param('idCategoria') idCategoria: string) {
    return this.productosService.buscarPorCategoria(idCategoria);
  }

}
