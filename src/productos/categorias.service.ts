import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CATEGORIAS } from 'src/datos';
import { Repository } from 'typeorm';
import { CategoriaDto } from './dto/categoria.dto';
import { Categoria } from './entities/categoria';
import { CategoriaMapper } from './mapper/categoria.mapper';

@Injectable()
export class CategoriasService {

  constructor(@InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>) {}

  async findAll(): Promise<CategoriaDto[]> {
    const lista = await this.categoriaRepository.find();
    return CategoriaMapper.toDtoList(lista);
  }

  async fillData() {
    const lista = await this.categoriaRepository.find();
    if (lista.length == 0) {
      for (const categoria of CATEGORIAS) {
        await this.categoriaRepository.save(categoria);
      }
    }
  }

}
