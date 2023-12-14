import { RolDto } from "../dto/rol.dto";
import { Rol } from "../entities/rol";

export class RolMapper {

  static toDto(entity: Rol): RolDto {
    const dto = new RolDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toDtoList(entityList: Rol[]): RolDto[] {
    return entityList.map(entity => RolMapper.toDto(entity));
  }

}