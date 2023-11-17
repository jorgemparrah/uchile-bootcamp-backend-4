import { Injectable } from '@nestjs/common';
import { SUBCATEGORIAS } from 'src/datos';
import { SubcategoriaDto } from './dto/subcategoria.dto';
import { SubcategoriaMapper } from './mapper/subcategoria.mapper';

@Injectable()
export class SubcategoriasService {

  findAll(): SubcategoriaDto[] {
    return SubcategoriaMapper.toDtoList(SUBCATEGORIAS);
  }

  buscarPorCategoria(idCategoria: string): SubcategoriaDto[] {
    return SubcategoriaMapper.toDtoList(SUBCATEGORIAS.filter(subcategorias => subcategorias.idCategoria === idCategoria));
  }

}
