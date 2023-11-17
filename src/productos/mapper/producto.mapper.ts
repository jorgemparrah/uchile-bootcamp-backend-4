import { ProductoDto } from "../dto/producto.dto";
import { Producto } from "../entities/producto";

export class ProductoMapper {

  static toDto(entity: Producto): ProductoDto {
    const dto = new ProductoDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.descripcion = entity.descripcion;
    dto.idCategoria = entity.idCategoria;
    dto.precio = entity.precio;
    return dto;
  }

  static toDtoList(entityList: Producto[]): ProductoDto[] {
    return entityList.map(entity => ProductoMapper.toDto(entity));
  }

}