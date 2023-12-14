import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UsuarioDto } from "../dto/usuario.dto";
import { Rol } from "../entities/rol";
import { Usuario } from "../entities/usuario";

export class UsuarioMapper {

  static toDto(entity: Usuario): UsuarioDto {
    const dto = new UsuarioDto();
    dto.rut = entity.rut;
    dto.email = entity.email;
    dto.nombreCompleto = entity.nombreCompleto;
    dto.telefono = entity.telefono;
    return dto;
  }

  static toDtoList(entityList: Usuario[]): UsuarioDto[] {
    return entityList.map(entity => UsuarioMapper.toDto(entity));
  }

  static toEntity(dto: CreateUsuarioDto, rolCliente: Rol): Usuario {
    const entity = new Usuario(dto.rut, dto.email, dto.clave, dto.nombreCompleto, dto.telefono);
    entity.roles = [ rolCliente ];
    return entity;
  }



}