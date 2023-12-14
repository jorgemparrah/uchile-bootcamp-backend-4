import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { USUARIO_ADMIN, USUARIO_CLIENTE, USUARIO_MIXTO } from 'src/datos';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { JwtDto } from './dto/jwt.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { Rol } from './entities/rol';
import { Usuario } from './entities/usuario';
import { UsuarioMapper } from './mapper/usuario.mapper';
import { CryptoUtils } from './crypto.utils';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuariosService {
  private readonly logger = new Logger(UsuariosService.name);

  constructor(
    @InjectRepository(Usuario) private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Rol) private readonly rolRepository: Repository<Rol>,
    private jwtService: JwtService
  ) {}

  async registrarse(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDto> {
    this.logger.log(`Buscando si el email [${createUsuarioDto.email}] esta registrado`);
    const usuarioExistente = await this.buscarPorEmail(createUsuarioDto.email)
    if (usuarioExistente) {
      throw Error("No se pudo realizar el registro. El correo ya se encuentra registrado");
    }
    this.logger.log(`Buscando si el rut [${createUsuarioDto.rut}] esta registrado`);
    const usuarioExistentePorRut = await this.buscarPorRut(createUsuarioDto.rut)
    if (usuarioExistentePorRut) {
      throw Error("No se pudo realizar el registro. El RUT ya se encuentra registrado");
    }
    this.logger.log(`Buscando el rol cliente al rol [CLIENTE]`);
    const rolCliente: Rol = await this.rolRepository.findOneBy({ id: 'CLIENTE' });
    const usuario: Usuario = UsuarioMapper.toEntity(createUsuarioDto, rolCliente);
    usuario.clave = CryptoUtils.hashing(usuario.clave);
    this.logger.log(`Guardando el usuario [${usuario.email}]`);
    const usuarioGuardado: Usuario = await this.usuarioRepository.save(usuario);
    return UsuarioMapper.toDto(usuarioGuardado);
  }

  async inicioSesion(correo: string, clave: string): Promise<JwtDto> {
    this.logger.log(`Buscando si el usuario existe [${correo}]`);
    const usuario: Usuario = await this.buscarPorEmail(correo);
    if (!usuario) {
      throw Error("El usuario no existe");
    }
    this.logger.log(`Creando hash de la clave`);
    const claveHash = CryptoUtils.hashing(clave);
    this.logger.debug(`Clave: ${claveHash}`);
    this.logger.log(`Validando la clave del usuario [${correo}]`);
    if (usuario.clave !== claveHash) {
      throw Error("La clave no coincide");
    }
    const payload = {
      rut: usuario.rut,
      correo: usuario.email,
      nombreCompleto: usuario.nombreCompleto,
      telefono: usuario.telefono,
      roles: usuario.roles.map(rol => rol.id)
    };
    this.logger.log(`Generando token`);
    this.logger.verbose(JSON.stringify(payload));
    const token = this.jwtService.sign(payload);
    this.logger.log(`Token generado`);
    this.logger.debug(token);
    const jwtDto = new JwtDto();
    jwtDto.token = token;
    return jwtDto;
  }

  async findAll(): Promise<UsuarioDto[]> {
    const lista : Usuario[] = await this.usuarioRepository.find();
    return UsuarioMapper.toDtoList(lista);
  }

  async fillData() {
    const lista = await this.usuarioRepository.find();
    if (lista.length == 0) {
      const rolCliente: Rol = await this.rolRepository.findOneBy({ id: 'CLIENTE' });
      const rolAdmin: Rol = await this.rolRepository.findOneBy({ id: 'ADMIN' });
      for (const usuario of USUARIO_CLIENTE) {
        usuario.clave = CryptoUtils.hashing(usuario.clave);
        usuario.roles = [ rolCliente ];
        await this.usuarioRepository.save(usuario);
      }
      for (const usuario of USUARIO_MIXTO) {
        usuario.clave = CryptoUtils.hashing(usuario.clave);
        usuario.roles = [ rolCliente, rolAdmin ];
        await this.usuarioRepository.save(usuario);
      }
      for (const usuario of USUARIO_ADMIN) {
        usuario.clave = CryptoUtils.hashing(usuario.clave);
        usuario.roles = [ rolAdmin ];
        await this.usuarioRepository.save(usuario);
      }
    }
  }

  private async buscarPorEmail(email: string): Promise<Usuario> {
    const usuario : Usuario = await this.usuarioRepository.findOne({
      where: {
        email: email
      },
      relations: {
        roles: true
      }
    });
    return usuario;
  }

  private async buscarPorRut(rut: string): Promise<Usuario> {
    const usuario : Usuario = await this.usuarioRepository.findOneBy({ rut: rut });
    return usuario;
  }

}
