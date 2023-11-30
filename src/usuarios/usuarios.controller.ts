import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { AccesoDto } from './dto/acceso.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuariosService } from './usuarios.service';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  private readonly logger = new Logger(UsuariosController.name);
  
  constructor(
    private readonly usuariosService: UsuariosService
  ) {}

  @Post("registrar")
  @ApiBody({ type: CreateUsuarioDto })
  @ApiCreatedResponse({ description: "El usuario se registró correctamente" })
  @ApiBadRequestResponse({ description: "No se puede registrar el usuario" })
  registrar(@Body() createUsuarioDto: CreateUsuarioDto): string {
    return this.usuariosService.registrar(createUsuarioDto);
  }

  @Post("iniciarSesion")
  @ApiOkResponse({ description: "El usuario inició sesión correctamente" })
  @ApiUnauthorizedResponse({ description: "Usuario o clave incorrectos" })
  iniciarSesion(@Body() accesoDto: AccesoDto): UsuarioDto {
    this.logger.debug(`Iniciar sesión: ${accesoDto.fullName}`);
    return this.usuariosService.iniciarSesion(accesoDto.fullName, accesoDto.securePassword);
  }

  @Get()
  @ApiOkResponse({ description: "Lista de usuarios" })
  findAll(): UsuarioDto[] {
    return this.usuariosService.findAll();
  }

}
