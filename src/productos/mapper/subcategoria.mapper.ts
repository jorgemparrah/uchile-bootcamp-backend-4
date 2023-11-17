import { SubcategoriaDto } from "../dto/subcategoria.dto";
import { Subcategoria } from "../entities/subcategoria";

export class SubcategoriaMapper {

  static toDto(entity: Subcategoria): SubcategoriaDto {
    const dto = new SubcategoriaDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.idCategoria = entity.idCategoria;
    return dto;
  }

  static toDtoList(entityList: Subcategoria[]): SubcategoriaDto[] {
    return entityList.map(entity => SubcategoriaMapper.toDto(entity));
  }

}