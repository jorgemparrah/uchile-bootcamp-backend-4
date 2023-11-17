import { ComunaMapper } from "src/ubicacion/mapper/comuna.mapper";
import { PeluqueriaDto } from "../dto/peluqueria.dto";
import { Peluqueria } from "../entities/peluqueria";

export class PeluqueriaMapper {

  static toDto(entity: Peluqueria): PeluqueriaDto {
    const dto = new PeluqueriaDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    if (entity.comuna) {
      dto.comuna = ComunaMapper.toDto(entity.comuna);
    }
    return dto;
  }

  static toDtoList(entityList: Peluqueria[]): PeluqueriaDto[] {
    return entityList.map(entity => PeluqueriaMapper.toDto(entity));
  }

}