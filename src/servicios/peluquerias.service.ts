import { Injectable, NotImplementedException } from '@nestjs/common';
import { PeluqueriaDto } from './dto/peluqueria.dto';
import { COMUNAS, PELUQUERIAS } from 'src/datos';
import { ComunasService } from 'src/ubicacion/comunas.service';
import { Peluqueria } from './entities/peluqueria';
import { PeluqueriaMapper } from './mapper/peluqueria.mapper';
import { OrdenarUtil } from 'src/ordenar.util';

@Injectable()
export class PeluqueriasService {

  buscarPorComuna(idComuna: number): PeluqueriaDto[] {
    let listaPeluquerias : Peluqueria[] = PELUQUERIAS;
    if (idComuna) {
      listaPeluquerias = listaPeluquerias.filter(peluqueria => peluqueria.idComuna == idComuna);
    }
    listaPeluquerias = listaPeluquerias.map(peluqueria => {
      peluqueria.comuna = COMUNAS.find(comuna => comuna.id == peluqueria.idComuna)
      return peluqueria;
    });
    return OrdenarUtil.peluqueria(PeluqueriaMapper.toDtoList(listaPeluquerias));
  }

}
