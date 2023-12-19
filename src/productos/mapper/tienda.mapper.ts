import { TiendaDto } from "../dto/tienda.dto";
import { Tienda } from "../entities/tienda";

export class TiendaMapper {

  static toDto(entity: Tienda): TiendaDto {
    const dto = new TiendaDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toDtoList(entityList: Tienda[]): TiendaDto[] {
    return entityList.map(entity => TiendaMapper.toDto(entity));
  }

}