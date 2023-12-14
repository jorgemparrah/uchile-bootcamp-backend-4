import { RegionDto } from "../dto/region.dto";
import { Region } from "../entities/region";

export class RegionMapper {

  static toDto(entity: Region): RegionDto {
    const dto = new RegionDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toDtoList(entityList: Region[]): RegionDto[] {
    return entityList.map(entity => RegionMapper.toDto(entity));
  }


}