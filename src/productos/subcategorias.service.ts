import { Injectable } from '@nestjs/common';
import { SUBCATEGORIAS } from 'src/datos';
import { SubcategoriaDto } from './dto/subcategoria.dto';
import { SubcategoriaMapper } from './mapper/subcategoria.mapper';
import { Subcategoria } from './entities/subcategoria';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubcategoriasService {

  constructor(@InjectRepository(Subcategoria) private readonly subcategoriaRepository: Repository<Subcategoria>) {}

  async findAll(): Promise<SubcategoriaDto[]> {
    const lista = await this.subcategoriaRepository.find();
    return SubcategoriaMapper.toDtoList(lista);
  }

  async buscarPorCategoria(idCategoria: string): Promise<SubcategoriaDto[]> {
    const lista = await this.subcategoriaRepository.findBy({
      idCategoria: idCategoria
    });
    return SubcategoriaMapper.toDtoList(lista);
  }

  async fillData() {
    const lista = await this.subcategoriaRepository.find();
    if (lista.length == 0) {
      for (const subcategoria of SUBCATEGORIAS) {
        await this.subcategoriaRepository.save(subcategoria);
      }
    }
  }

}
