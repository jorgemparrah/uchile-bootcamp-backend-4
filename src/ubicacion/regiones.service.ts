import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { REGIONES } from 'src/datos';
import { OrdenarUtil } from 'src/ordenar.util';
import { Repository } from 'typeorm';
import { RegionDto } from './dto/region.dto';
import { Region } from './entities/region';
import { RegionMapper } from './mapper/region.mapper';

@Injectable()
export class RegionesService {

  constructor(@InjectRepository(Region) private readonly regionRepository: Repository<Region>) {}

  async findAll(): Promise<RegionDto[]> {
    const lista = await this.regionRepository.find();
    return OrdenarUtil.comuna(RegionMapper.toDtoList(lista));
  }

  async findOne(id: string): Promise<RegionDto> {
    const entidad = await this.regionRepository.findOneBy({ id: id });
    if (entidad) {
      return RegionMapper.toDto(entidad);
    }
    throw new NotFoundException(`Region con id ${id} no encontrada`);
  }

  async fillData() {
    const lista = await this.regionRepository.find();
    if (lista.length == 0) {
      for (const region of REGIONES) {
        await this.regionRepository.save(region);
      }
    }
  }

}
