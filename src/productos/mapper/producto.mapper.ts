import { CrearProductoDto } from "../dto/crearProducto.dto";
import { ProductoDto } from "../dto/producto.dto";
import { Producto } from "../entities/producto";

export class ProductoMapper {

  static toDto(entity: Producto): ProductoDto {
    const dto = new ProductoDto();
    dto.nombre = entity.nombre;
    if (entity.categoria) {
      dto.categoria = entity.categoria.nombre;
    }
    if (entity.subcategoria) {
      dto.subcategoria = entity.subcategoria.nombre;
    }
    if (entity.especie) {
      dto.especie = entity.especie.nombre;
    }
    dto.precio = entity.precio;
    dto.cantidad = entity.cantidad;
    dto.imagen = entity.imagen;
    return dto;
  }

  static toDtoList(entityList: Producto[]): ProductoDto[] {
    return entityList.map(entity => ProductoMapper.toDto(entity));
  }

  static toEntity(dto: CrearProductoDto): Producto {
    const entity = new Producto(
      dto.id,
      dto.nombre,
      dto.idCategoria,
      dto.idSubcategoria,
      dto.idEspecie,
      dto.precio,
      dto.cantidad,
      dto.imagen
    );
    return entity;
  }

}