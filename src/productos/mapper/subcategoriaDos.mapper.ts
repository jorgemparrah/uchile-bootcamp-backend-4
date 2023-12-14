import { SubcategoriaDosDto } from "../dto/subcategoriaDos.dto";
import { SubcategoriaDos } from "../entities/subcategoriaDos";

export class SubcategoriaDosMapper {

  static toDto(entity: SubcategoriaDos): SubcategoriaDosDto {
    const dto = new SubcategoriaDosDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.idSubcategoria = entity.idSubcategoria;
    return dto;
  }

  static toDtoList(entityList: SubcategoriaDos[]): SubcategoriaDosDto[] {
    return entityList.map(entity => SubcategoriaDosMapper.toDto(entity));
  }

}