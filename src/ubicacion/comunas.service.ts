import { Injectable } from '@nestjs/common';
import { COMUNAS } from 'src/datos';
import { OrdenarUtil } from 'src/ordenar.util';
import { ComunaDto } from './dto/comuna.dto';
import { ComunaMapper } from './mapper/comuna.mapper';

@Injectable()
export class ComunasService {

  findAll(): ComunaDto[] {
    return OrdenarUtil.comuna(ComunaMapper.toDtoList(COMUNAS));
  }

  findOne(id: number): ComunaDto {
    return ComunaMapper.toDto(COMUNAS.filter(comuna => {
      return comuna.id == id;
    })[0]);
  }

}
