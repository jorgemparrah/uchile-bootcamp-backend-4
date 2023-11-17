import { PeluqueriaDto } from "./servicios/dto/peluqueria.dto";
import { ComunaDto } from "./ubicacion/dto/comuna.dto";

export class OrdenarUtil {

  static comuna(dtoList: ComunaDto[]): ComunaDto[] {
    return dtoList.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  static peluqueria(dtoList: PeluqueriaDto[]): PeluqueriaDto[] {
    return dtoList.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }


}