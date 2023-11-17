import { ContactoDto } from "../dto/contacto.dto";
import { Contacto } from "../entities/contacto";

export class ContactoMapper {

  static toDto(entity: Contacto): ContactoDto {
    const dto = new ContactoDto();
    dto.nombreCompleto = entity.nombreCompleto;
    dto.email = entity.email;
    dto.mensaje = entity.mensaje;
    return dto;
  }

  static toDtoList(entityList: Contacto[]): ContactoDto[] {
    return entityList.map(entity => ContactoMapper.toDto(entity));
  }

  static toEntity(dto: ContactoDto): Contacto {
    const entity = new Contacto();
    entity.nombreCompleto = dto.nombreCompleto;
    entity.email = dto.email;
    entity.mensaje = dto.mensaje;
    return entity;
  }


}