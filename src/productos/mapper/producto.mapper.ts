import { CrearProductoDto } from "../dto/crearProducto.dto";
import { ProductoDto } from "../dto/producto.dto";
import { ProductoCatalogoDto } from "../dto/productoCatalogo.dto";
import { Producto } from "../entities/producto";
import { StockMapper } from "./stock.mapper";

export class ProductoMapper {

  static toDto(entity: Producto): ProductoDto {
    const dto = new ProductoDto();
    dto.id = entity.id;
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
    dto.imagen = entity.imagen;
    dto.stock = StockMapper.toDtoList(entity.stock);
    return dto;
  }

  static toDtoList(entityList: Producto[]): ProductoDto[] {
    return entityList.map(entity => ProductoMapper.toDto(entity));
  }

  static toDtoProductoCatalogo(entity: Producto): ProductoCatalogoDto {
    const dto = new ProductoCatalogoDto();
    dto.id = entity.id;
    dto.nombre = entity.nombre;
    dto.precio = entity.stock.reduce((prev, current) => {
      return (prev.precio < current.precio) ? prev : current
    }, entity.stock[0]).precio;
    return dto;
  }

  static toDtoListProductoCatalogo(entityList: Producto[]): ProductoCatalogoDto[] {
    return entityList.map(entity => ProductoMapper.toDtoProductoCatalogo(entity));
  }

  static toEntity(id: string, ruta: string, dto: CrearProductoDto): Producto {
    const entity = new Producto(
      id,
      dto.nombre,
      dto.idCategoria,
      dto.idSubcategoria,
      dto.idEspecie,
      dto.descripcion,
      dto.detalle,
      ruta
    );
    return entity;
  }

}