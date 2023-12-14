import { CategoriaDto } from "../dto/categoria.dto";
import { Categoria } from "../entities/categoria";

export class CategoriaMapper {

  static toDto(entity: Categoria): CategoriaDto {
    const dto = new CategoriaDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    return dto;
  }

  static toDtoList(entityList: Categoria[]): CategoriaDto[] {
    return entityList.map(entity => CategoriaMapper.toDto(entity));
  }

}