import { Injectable } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { ProductoMapper } from './mapper/producto.mapper';
import { PRODUCTOS } from 'src/datos';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './entities/producto';
import { Repository } from 'typeorm';
import { CrearProductoDto } from './dto/crearProducto.dto';
import { promises as ARCHIVOS } from 'fs';

@Injectable()
export class ProductosService {


  constructor(@InjectRepository(Producto) private readonly productoRepository: Repository<Producto>) {}

  async findAll(): Promise<ProductoDto[]> {
    const lista = await this.productoRepository.find({
      relations: {
        categoria: true,
        subcategoria: true,
        especie: true
      },
    });
    console.log(lista);
    return ProductoMapper.toDtoList(lista);
  }

  async buscarPorCategoria(idCategoria: string): Promise<ProductoDto[]> {
    const lista = await this.productoRepository.findBy({
      idCategoria: idCategoria
    });
    return ProductoMapper.toDtoList(lista);
  }

  async registrar(dto: CrearProductoDto): Promise<ProductoDto> {
    let ruta = null;
    if (dto.imagen && dto.nombreImagen) {
      ruta = await this.guardarImagen(dto.nombreImagen, dto.imagen);
    }
    const contador: number = await this.productoRepository.count();
    const entidad: Producto = ProductoMapper.toEntity(contador, ruta, dto);
    const guardado: Producto = await this.productoRepository.save(entidad);
    return ProductoMapper.toDto(guardado);
  }

  async guardarImagen(nombre: string, base64: string): Promise<string> {
    const rutaProyecto = '/Users/cristianchaconrios/DEV/PrimeraPagina';
    try {
      const extension = nombre.split('.').pop();
      const nombreAleatorio = Math.floor(Math.random() * 1000000000);
      const directorioBase = `/src/assets/images/productos`;
      await ARCHIVOS.mkdir(`${rutaProyecto}${directorioBase}`, { recursive: true });
      const rutaImagen = `${directorioBase}/${nombreAleatorio}.${extension}`;
      const base64string = base64.split(';base64,').pop();
      await ARCHIVOS.writeFile(`${rutaProyecto}${rutaImagen}`, base64string, {
        encoding: 'base64'
      });
      return rutaImagen;
    } catch (error) {
      
    }
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
