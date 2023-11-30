import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags, ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { ProductoDto } from './dto/producto.dto';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crearProducto.dto';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de productos", type: ProductoDto, isArray: true })
  async findAll() {
    return await this.productosService.findAll();
  }

  @Get("categoria/:idCategoria")
  @ApiParam({ name: 'idCategoria', description: 'Identificador de la categoria' })
  @ApiOkResponse({ description: "Lista de productos por categoria", type: ProductoDto, isArray: true })
  async buscarPorCategoria(@Param('idCategoria') idCategoria: string) {
    return await this.productosService.buscarPorCategoria(idCategoria);
  }

  @Post()
  @ApiBody({ type: CrearProductoDto })
  @ApiCreatedResponse({ description: "Producto creado Exitosamente", type: ProductoDto })
  async registrar(@Body() dto: CrearProductoDto) {
    return await this.productosService.registrar(dto);
  }

}
