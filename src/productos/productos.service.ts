import { Injectable, Logger } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { ProductoMapper } from './mapper/producto.mapper';
import { PRODUCTOS } from 'src/datos';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto';
import { Repository } from 'typeorm';
import { CrearProductoDto } from './dto/crearProducto.dto';
import { promises as ARCHIVOS } from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { ProductoCatalogoDto } from './dto/productoCatalogo.dto';
import { Stock } from './entities/stock';
import { StockMapper } from './mapper/stock.mapper';
import { ActualizarProductoDto } from './dto/actualizarProducto.dto';
import { CrearStockDto } from './dto/crearStock.dto';
import { Subcategoria } from './entities/subcategoria';
import { Categoria } from './entities/categoria';
import { Especie } from './entities/especie';
import { Tienda } from './entities/tienda';

@Injectable()
export class ProductosService {
  private readonly logger = new Logger(ProductosService.name);

  constructor(
    @InjectRepository(Producto) private readonly productoRepository: Repository<Producto>,
    @InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>,
    @InjectRepository(Subcategoria) private readonly subcategoriaRepository: Repository<Subcategoria>,
    @InjectRepository(Especie) private readonly especieRepository: Repository<Especie>,
    @InjectRepository(Tienda) private readonly tiendaRepository: Repository<Tienda>,
    @InjectRepository(Stock) private readonly stockRepository: Repository<Stock>
  ) {}

  async findAll(): Promise<ProductoDto[]> {
    const lista = await this.productoRepository.find({
      relations: [ 'categoria', 'subcategoria', 'especie', 'stock', 'stock.tienda' ]
    });
    return ProductoMapper.toDtoList(lista);
  }

  async buscarPorId(idProducto: string): Promise<ProductoDto> {
    const producto : Producto = await this.productoRepository.findOne({
      where: {
        id: idProducto
      },
      relations: [ 'categoria', 'subcategoria', 'especie', 'stock', 'stock.tienda' ]
    });
    return ProductoMapper.toDto(producto);
  }

  async buscarPorCategoria(idCategoria: string): Promise<ProductoCatalogoDto[]> {
    const lista = await this.productoRepository.find({
      where: {
        idCategoria: idCategoria
      },
      relations: {
        stock: true
      }
    });
    return ProductoMapper.toDtoListProductoCatalogo(lista);
  }

  async buscarPorSubcategoria(idSubcategoria: string): Promise<ProductoCatalogoDto[]> {
    const lista = await this.productoRepository.find({
      where: {
        idSubcategoria: idSubcategoria
      },
      relations: {
        stock: true
      }
    });
    return ProductoMapper.toDtoListProductoCatalogo(lista);
  }

  async registrar(dto: CrearProductoDto): Promise<ProductoDto> {
    await this.validarProductoACrear(dto);
    let ruta = null;
    const idProducto = uuidv4();
    if (dto.imagen && dto.nombreImagen) {
      ruta = await this.guardarImagen(idProducto, dto.nombreImagen, dto.imagen);
    }
    const entidad: Producto = ProductoMapper.toEntity(idProducto, ruta, dto);
    await this.productoRepository.save(entidad);
    const stock : Stock[] = StockMapper.toEntityList(entidad.id, dto.stock);
    await this.stockRepository.save(stock);
    return this.buscarPorId(entidad.id);
  }

  private async validarProductoACrear(dto: CrearProductoDto): Promise<void> {
    await this.validarExistencia('Categoria', dto.idCategoria, this.categoriaRepository);
    const subcategoria = await this.validarExistencia('Subcategoria', dto.idSubcategoria, this.subcategoriaRepository);
    if (subcategoria.idCategoria !== dto.idCategoria) {
      throw new Error(`La subcategoria [${dto.idSubcategoria}] no pertenece a la categoria [${dto.idCategoria}]`);
    }
    await this.validarExistencia('Especie', dto.idEspecie, this.especieRepository);
    // VERIFICAR SI EXISTE DOS O MAS VECES LA MISMA TIENDA EN EL STOCK
    const tiendasIds = new Set(dto.stock.map(stock => stock.idTienda));
    if (tiendasIds.size !== dto.stock.length) {
      throw new Error(`Existen dos o mas veces la misma tienda en el stock`);
    }
    for (const idTienda of tiendasIds) {
      await this.validarExistencia('Tienda', idTienda, this.tiendaRepository);
    }
  }

  private async validarExistencia(entidad: string, id: string, repositorio: any): Promise<any> {
    try {
      return await repositorio.findOneByOrFail({ id });
    } catch (error) {
      throw new Error(`No existe id${entidad}: [${id}]`);
    }
  }

  async actualizar(idProducto: string, dto: ActualizarProductoDto): Promise<ProductoDto> {
    this.logger.log(`Actualizando producto [${idProducto}]`);
    const producto : Producto = await this.productoRepository.findOneBy({ id: idProducto });
    if (dto.nombre && dto.nombre != producto.nombre) {
      this.logger.debug(`Se cambio el nombre del producto [${producto.nombre}] a [${dto.nombre}]`);
      producto.nombre = dto.nombre;
    }
    if (dto.idCategoria && dto.idCategoria != producto.idCategoria) {
      await this.validarExistencia('Categoria', dto.idCategoria, this.categoriaRepository);
      this.logger.debug(`Se cambio el idCategoria del producto [${producto.idCategoria}] a [${dto.idCategoria}]`);
      producto.idCategoria = dto.idCategoria;
    }
    if (dto.idSubcategoria && dto.idSubcategoria != producto.idSubcategoria) {
      const subcategoria = await this.validarExistencia('Subcategoria', dto.idSubcategoria, this.subcategoriaRepository);
      if (subcategoria.idCategoria !== dto.idCategoria) {
        throw new Error(`La subcategoria [${dto.idSubcategoria}] no pertenece a la categoria [${producto.idCategoria}]`);
      }
      this.logger.debug(`Se cambio el idSubcategoria del producto [${producto.idSubcategoria}] a [${dto.idSubcategoria}]`);
      producto.idSubcategoria = dto.idSubcategoria;
    }
    if (dto.idEspecie && dto.idEspecie != producto.idEspecie) {
      await this.validarExistencia('Especie', dto.idEspecie, this.especieRepository);
      this.logger.debug(`Se cambio el idEspecie del producto [${producto.idEspecie}] a [${dto.idEspecie}]`);
      producto.idEspecie = dto.idEspecie;
    }
    if (dto.descripcion && dto.descripcion != producto.descripcion) {
      this.logger.debug(`Se cambio la descripcion del producto [${producto.descripcion}] a [${dto.descripcion}]`);
      producto.descripcion = dto.descripcion;
    }
    if (dto.detalle && dto.detalle != producto.detalle) {
      this.logger.debug(`Se cambio el detalle del producto [${producto.detalle}] a [${dto.detalle}]`);
      producto.detalle = dto.detalle;
    }
    if (dto.imagen && dto.nombreImagen) {
      this.logger.debug(`Se cambio la imagen del producto [${producto.imagen}] a [${dto.nombreImagen}]`);
      producto.imagen = await this.guardarImagen(idProducto, dto.nombreImagen, dto.imagen);
    }
    await this.actualizarStock(idProducto, dto.stock);
    await this.productoRepository.save(producto);
    this.logger.log(`Producto actualizado exitosamente`);
    return this.buscarPorId(idProducto);
  }

  async eliminar(id: string): Promise<ProductoDto> {
    const productoAEliminar: Producto = await this.productoRepository.findOne({
      where: {
        id: id
      },
      relations: [ 'stock', 'stock.tienda' ]
    });
    if (!productoAEliminar) {
      throw new Error(`No existe idProducto: [${id}]`);
    }
    await this.stockRepository.remove(productoAEliminar.stock);
    const dto = ProductoMapper.toDto(productoAEliminar);
    await this.productoRepository.delete(id);
    return dto;
  }

  async guardarImagen(idProducto: string, nombre: string, base64: string): Promise<string> {
    const rutaProyecto = '/Users/cristianchaconrios/DEV/PrimeraPagina';
    try {
      const extension = nombre.split('.').pop();
      const directorioBase = `/src/assets/images/productos`;
      await ARCHIVOS.mkdir(`${rutaProyecto}${directorioBase}`, { recursive: true });
      const rutaImagen = `${directorioBase}/${idProducto}.${extension}`;
      const base64string = base64.split(';base64,').pop();
      await ARCHIVOS.writeFile(`${rutaProyecto}${rutaImagen}`, base64string, {
        encoding: 'base64'
      });
      return rutaImagen;
    } catch (error) {
      console.log(error);
    }
  }

  async actualizarStock(idProducto: string, dtoList : CrearStockDto[]): Promise<void> {
    this.logger.log(`Actualizando stock del producto [${idProducto}]`);
    const tiendasIds = new Set(dtoList.map(stock => stock.idTienda));
    if (tiendasIds.size !== dtoList.length) {
      throw new Error(`Existen dos o mas veces la misma tienda en el stock`);
    }
    for (const idTienda of tiendasIds) {
      await this.validarExistencia('Tienda', idTienda, this.tiendaRepository);
    }
    const stockActual : Stock[] = await this.stockRepository.findBy({ idProducto: idProducto });
    const listaStock = StockMapper.toEntityList(idProducto, dtoList);
    this.logger.verbose(`Stock actual: ${JSON.stringify(stockActual)}`);
    this.logger.verbose(`Stock nuevo: ${JSON.stringify(listaStock)}`);
    const stockNuevo : Stock[] = listaStock.filter((stock) => !stockActual.some((s) => s.idTienda == stock.idTienda));
    const stockEliminar : Stock[] = stockActual.filter((stock) => !listaStock.some((s) => s.idTienda == stock.idTienda));
    const stockActualizar : Stock[] = listaStock.filter((stock) => stockActual.some((s) => s.idTienda == stock.idTienda));
    this.logger.debug(`Se agregaran ${stockNuevo.length} registros`);
    this.logger.debug(`Se actualizaran ${stockActualizar.length} registros`);
    this.logger.debug(`Se eliminaran ${stockEliminar.length} registros`);
    for (const stock of stockActualizar) {
      const stockEncontrado = stockActual.find((s) => s.idTienda == stock.idTienda);
      stockEncontrado.precio = stock.precio;
      stockEncontrado.cantidad = stock.cantidad;
      await this.stockRepository.save(stockEncontrado);
    }
    await this.stockRepository.save(stockNuevo);
    await this.stockRepository.remove(stockEliminar);
    this.logger.log(`Stock actualizado exitosamente`);
  }

  async fillData() {
    const lista = await this.productoRepository.find();
    if (lista.length == 0) {
      for (const entidad of PRODUCTOS) {
        await this.productoRepository.save(entidad);
      }
    }
  }

}
