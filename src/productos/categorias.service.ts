import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CATEGORIAS } from 'src/datos';
import { Categoria } from './entities/categoria';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {

  constructor(@InjectRepository(Categoria) private readonly categoriaRepository: Repository<Categoria>) {}

  async fillData() {
    const lista = await this.categoriaRepository.find();
    if (lista.length == 0) {
      for (const categoria of CATEGORIAS) {
        await this.categoriaRepository.save(categoria);
      }
    }
  }

}
