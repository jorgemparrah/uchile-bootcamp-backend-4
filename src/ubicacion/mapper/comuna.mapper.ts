import { ComunaDto } from "../dto/comuna.dto";
import { Comuna } from "../entities/comuna";

export class ComunaMapper {

  static toDto(entity: Comuna): ComunaDto {
    const dto = new ComunaDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toDtoList(entityList: Comuna[]): ComunaDto[] {
    return entityList.map(entity => ComunaMapper.toDto(entity));
  }


}