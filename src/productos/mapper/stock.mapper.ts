import { CrearStockDto } from "../dto/crearStock.dto";
import { StockDto } from "../dto/stock.dto";
import { Stock } from "../entities/stock";
import { TiendaMapper } from "./tienda.mapper";

export class StockMapper {

  static toDto(entity: Stock): StockDto {
    const dto = new StockDto();
    dto.tienda = TiendaMapper.toDto(entity.tienda);
    dto.precio = entity.precio;
    dto.cantidad = entity.cantidad;
    return dto;
  }

  static toDtoList(entityList: Stock[]): StockDto[] {
    return entityList.map(entity => StockMapper.toDto(entity));
  }

  static toEntity(idProducto: string, dto: CrearStockDto): Stock {
    const entity = new Stock(
      idProducto,
      dto.idTienda,
      dto.precio,
      dto.cantidad,
    );
    return entity;
  }

  static toEntityList(idProducto: string, dtoList: CrearStockDto[]): Stock[] {
    return dtoList.map(dto => StockMapper.toEntity(idProducto, dto));
  }

}