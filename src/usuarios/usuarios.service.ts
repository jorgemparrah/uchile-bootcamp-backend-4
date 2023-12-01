import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { USUARIOS } from 'src/datos';
import { UsuarioDto } from './dto/usuario.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioMapper } from './mapper/usuario.mapper';
import { Usuario } from './entities/usuario';

@Injectable()
export class UsuariosService {

  registrar(createUsuarioDto: CreateUsuarioDto): string {
    if (this.buscarPorEmail(createUsuarioDto.email)) {
      throw new BadRequestException("No se pudo realizar el registro. El correo ya se encuentra registrado");
    }
    if (this.buscarPorRut(createUsuarioDto.rut)) {
      throw new BadRequestException("No se pudo realizar el registro. El RUT ya se encuentra registrado");
    }
    USUARIOS.push(UsuarioMapper.toEntity(createUsuarioDto));
    return "El usuario se registró correctamente";
  }

  findAll(): UsuarioDto[] {
    return UsuarioMapper.toDtoList(USUARIOS);
  }

  private buscarPorRut(rut: string): Usuario {
    const lista : Usuario[] = USUARIOS.filter(usuario => {
      return usuario.rut == rut;
    });
    if (lista.length > 0) {
      return lista[0];
    }
    return null;
  }

  private buscarPorEmail(email: string): Usuario {
    const lista : Usuario[] = USUARIOS.filter(usuario => {
      return usuario.email == email;
    });
    if (lista.length > 0) {
      return lista[0];
    }
    return null;
  }

  iniciarSesion(correo: string, clave: string): UsuarioDto {
    const usuario = this.buscarPorRut(correo);
    if (usuario && usuario.clave === clave) {
      return UsuarioMapper.toDto(usuario);
    }
    throw new UnauthorizedException("Usuario o clave incorrectos");
  }

}
