import { Injectable } from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';
import { ProductoMapper } from './mapper/producto.mapper';
import { PRODUCTOS } from 'src/datos';

@Injectable()
export class ProductosService {

  findAll(): ProductoDto[] {
    return ProductoMapper.toDtoList(PRODUCTOS);
  }

  buscarPorCategoria(idCategoria: string) {
    return ProductoMapper.toDtoList(PRODUCTOS.filter(producto => producto.idCategoria === idCategoria));
  }

}
