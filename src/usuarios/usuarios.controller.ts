import { BadRequestException, Body, Controller, Get, Logger, Post, Req, UnauthorizedException } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccesoDto } from './dto/acceso.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuariosService } from './usuarios.service';
import { JwtDto } from './dto/jwt.dto';

@ApiTags('Usuarios')
@Controller()
export class UsuariosController {
  private readonly logger = new Logger(UsuariosController.name);

  constructor(
    private readonly usuariosService: UsuariosService
  ) {}

  @Post("registrarse")
  @ApiBody({ type: CreateUsuarioDto })
  @ApiCreatedResponse({ description: "El usuario se registró correctamente", type: UsuarioDto })
  @ApiBadRequestResponse({ description: "No se puede registrar el usuario" })
  async registrarse(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDto> {
    try {
      this.logger.log(`Registrando usuario [${createUsuarioDto.email}]`);
      this.logger.verbose(JSON.stringify(createUsuarioDto));
      const resultado : UsuarioDto = await this.usuariosService.registrarse(createUsuarioDto);
      this.logger.log(`Usuario registrado exitosamente [${createUsuarioDto.email}]`);
      this.logger.verbose(JSON.stringify(resultado));
      return resultado;
    } catch (error) {
      this.logger.error(error.message);
      throw new BadRequestException(error.message);
    }
  }

  @Post("inicioSesion")
  @ApiBody({ type: AccesoDto })
  @ApiOkResponse({ description: "El usuario inició sesión correctamente" })
  @ApiUnauthorizedResponse({ description: "Correo o clave incorrectos" })
  async inicioSesion(@Body() accesoDto: AccesoDto): Promise<JwtDto> {
    try {
      this.logger.log(`Iniciando sesión: [${accesoDto.correo}]`);
      this.logger.verbose(JSON.stringify(accesoDto));
      const resultado = await this.usuariosService.inicioSesion(accesoDto.correo, accesoDto.clave);
      return resultado;
    } catch (error) {
      this.logger.warn(error.message);
      throw new UnauthorizedException("Usuario o clave incorrectos");
    }
  }

  @Get('usuarios')
  @ApiOkResponse({ description: "Lista de usuarios" })
  async findAll(): Promise<UsuarioDto[]> {
    const resultado = await this.usuariosService.findAll();
    return resultado;
  }

}
