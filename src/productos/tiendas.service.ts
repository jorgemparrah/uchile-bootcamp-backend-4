import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TIENDAS } from 'src/datos';
import { Repository } from 'typeorm';
import { TiendaDto } from './dto/tienda.dto';
import { Tienda } from './entities/tienda';
import { TiendaMapper } from './mapper/tienda.mapper';

@Injectable()
export class TiendasService {

  constructor(@InjectRepository(Tienda) private readonly tiendaRepository: Repository<Tienda>) {}

  async findAll(): Promise<TiendaDto[]> {
    const lista = await this.tiendaRepository.find();
    return TiendaMapper.toDtoList(lista);
  }

  async fillData() {
    const lista = await this.tiendaRepository.find();
    if (lista.length == 0) {
      for (const tienda of TIENDAS) {
        await this.tiendaRepository.save(tienda);
      }
    }
  }

}
