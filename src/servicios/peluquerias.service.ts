import { Injectable } from '@nestjs/common';
import { PeluqueriaDto } from './dto/peluqueria.dto';

@Injectable()
export class PeluqueriasService {

  buscarPorComuna(idComuna: string): PeluqueriaDto[] {
    // let listaPeluquerias : Peluqueria[] = PELUQUERIAS;
    // if (idComuna) {
    //   listaPeluquerias = listaPeluquerias.filter(peluqueria => peluqueria.idComuna == idComuna);
    // }
    // listaPeluquerias = listaPeluquerias.map(peluqueria => {
    //   peluqueria.comuna = COMUNAS.find(comuna => comuna.id == peluqueria.idComuna)
    //   return peluqueria;
    // });
    // return OrdenarUtil.peluqueria(PeluqueriaMapper.toDtoList(listaPeluquerias));
    return [];
  }

}
