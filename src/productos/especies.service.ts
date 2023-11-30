import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ESPECIES } from 'src/datos';
import { Repository } from 'typeorm';
import { Especie } from './entities/especie';

@Injectable()
export class EspeciesService {

  constructor(@InjectRepository(Especie) private readonly especieRepository: Repository<Especie>) {}

  async fillData() {
    const lista = await this.especieRepository.find();
    if (lista.length == 0) {
      for (const especie of ESPECIES) {
        await this.especieRepository.save(especie);
      }
    }
  }

}
