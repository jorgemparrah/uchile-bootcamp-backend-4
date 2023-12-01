import { Injectable } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { ProductoMapper } from './mapper/producto.mapper';
import { PRODUCTOS } from 'src/datos';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto';
import { Repository } from 'typeorm';
import { CrearProductoDto } from './dto/crearProducto.dto';

@Injectable()
export class ProductosService {


  constructor(@InjectRepository(Producto) private readonly productoRepository: Repository<Producto>) {}

  async findAll(): Promise<ProductoDto[]> {
    const lista = await this.productoRepository.find({
      relations: {
        categoria: true,
        subcategoria: true,
        especie: true,
      },
    });
    return ProductoMapper.toDtoList(lista);
  }

  async buscarPorCategoria(idCategoria: string): Promise<ProductoDto[]> {
    const lista = await this.productoRepository.findBy({
      idCategoria: idCategoria
    });
    return ProductoMapper.toDtoList(lista);
  }

  async registrar(dto: CrearProductoDto): Promise<ProductoDto> {
    const entidad: Producto = ProductoMapper.toEntity(dto);
    const guardado: Producto = await this.productoRepository.save(entidad);
    return ProductoMapper.toDto(guardado);
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
