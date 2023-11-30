import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { COMUNAS } from 'src/datos';
import { OrdenarUtil } from 'src/ordenar.util';
import { Repository } from 'typeorm';
import { ComunaDto } from './dto/comuna.dto';
import { Comuna } from './entities/comuna';
import { ComunaMapper } from './mapper/comuna.mapper';

@Injectable()
export class ComunasService {

  constructor(@InjectRepository(Comuna) private readonly comunaRepository: Repository<Comuna>) {}

  async findAll(): Promise<ComunaDto[]> {
    const lista = await this.comunaRepository.find();
    return OrdenarUtil.comuna(ComunaMapper.toDtoList(lista));
  }

  async findOne(id: number): Promise<ComunaDto> {
    const entidad = await this.comunaRepository.findOneBy({ id: id });
    if (entidad) {
      return ComunaMapper.toDto(entidad);
    }
    throw new NotFoundException(`Comuna con id ${id} no encontrada`);
  }

  async fillData() {
    const lista = await this.comunaRepository.find();
    if (lista.length == 0) {
      for (const comuna of COMUNAS) {
        await this.comunaRepository.save(comuna);
      }
    }
  }

}
