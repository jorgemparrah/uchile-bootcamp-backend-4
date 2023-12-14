import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SUBCATEGORIAS_DOS } from 'src/datos';
import { Repository } from 'typeorm';
import { SubcategoriaDosDto } from './dto/subcategoriaDos.dto';
import { SubcategoriaDos } from './entities/subcategoriaDos';
import { SubcategoriaDosMapper } from './mapper/subcategoriaDos.mapper';

@Injectable()
export class SubcategoriasDosService {

  constructor(@InjectRepository(SubcategoriaDos) private readonly subcategoriaDosRepository: Repository<SubcategoriaDos>) {}

  async findAll(): Promise<SubcategoriaDosDto[]> {
    const lista = await this.subcategoriaDosRepository.find();
    return SubcategoriaDosMapper.toDtoList(lista);
  }

  async buscarPorSubcategoria(idSubcategoria: string): Promise<SubcategoriaDosDto[]> {
    const lista = await this.subcategoriaDosRepository.findBy({
      idSubcategoria: idSubcategoria
    });
    return SubcategoriaDosMapper.toDtoList(lista);
  }

  async fillData(): Promise<void> {
    const lista = await this.subcategoriaDosRepository.find();
    if (lista.length == 0) {
      for (const subcategoriaDos of SUBCATEGORIAS_DOS) {
        await this.subcategoriaDosRepository.save(subcategoriaDos);
      }
    }
  }

}
