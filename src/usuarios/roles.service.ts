import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RolDto } from './dto/rol.dto';
import { Rol } from './entities/rol';
import { RolMapper } from './mapper/rol.mapper';
import { ROLES } from 'src/datos';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Rol) private readonly rolRepository: Repository<Rol>
  ) {}

  async findAll(): Promise<RolDto[]> {
    const lista = await this.rolRepository.find();
    return RolMapper.toDtoList(lista);
  }

  async fillData() {
    const lista = await this.rolRepository.find();
    if (lista.length == 0) {
      for (const rol of ROLES) {
        await this.rolRepository.save(rol);
      }
    }
  }

}
