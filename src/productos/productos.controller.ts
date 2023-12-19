import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags, ApiCreatedResponse, ApiBody } from '@nestjs/swagger';
import { ProductoDto } from './dto/producto.dto';
import { ProductosService } from './productos.service';
import { CrearProductoDto } from './dto/crearProducto.dto';
import { ProductoCatalogoDto } from './dto/productoCatalogo.dto';
import { ActualizarProductoDto } from './dto/actualizarProducto.dto';

@ApiTags('Productos')
@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiOkResponse({ description: "Lista de productos", type: ProductoDto, isArray: true })
  async findAll() {
    return await this.productosService.findAll();
  }

  @Get(":idProducto")
  @ApiParam({ name: 'idProducto', description: 'Identificador del producto' })
  @ApiOkResponse({ description: "Datos del producto", type: ProductoDto })
  async buscarPorId(@Param('idProducto') idProducto: string) {
    return await this.productosService.buscarPorId(idProducto);
  }

  @Get("categoria/:idCategoria")
  @ApiParam({ name: 'idCategoria', description: 'Identificador de la categoria' })
  @ApiOkResponse({ description: "Lista de productos por categoria", type: ProductoCatalogoDto, isArray: true })
  async buscarPorCategoria(@Param('idCategoria') idCategoria: string) {
    return await this.productosService.buscarPorCategoria(idCategoria);
  }

  @Get("subcategoria/:idSubcategoria")
  @ApiParam({ name: 'idSubcategoria', description: 'Identificador de la subcategoria' })
  @ApiOkResponse({ description: "Lista de productos por subcategoria", type: ProductoCatalogoDto, isArray: true })
  async buscarPorSubcategoria(@Param('idSubcategoria') idSubcategoria: string) {
    return await this.productosService.buscarPorSubcategoria(idSubcategoria);
  }

  @Post()
  @ApiBody({ type: CrearProductoDto })
  @ApiCreatedResponse({ description: "Producto creado Exitosamente", type: ProductoDto })
  async registrar(@Body() dto: CrearProductoDto) {
    try {
      return await this.productosService.registrar(dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Put(":id")
  @ApiCreatedResponse({ description: "Producto actualizado exitosamente", type: ProductoDto })
  async actualizar(@Param('id') id: string, @Body() dto: ActualizarProductoDto) {
    try {
      return await this.productosService.actualizar(id, dto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(":id")
  @ApiCreatedResponse({ description: "Producto eliminado exitosamente", type: ProductoDto })
  async eliminar(@Param('id') id: string) {
    try {
      return await this.productosService.eliminar(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

}
