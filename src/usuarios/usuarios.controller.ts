import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccesoDto } from './dto/acceso.dto';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuariosService } from './usuarios.service';
import { UsuarioDto } from './dto/usuario.dto';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

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
    return this.usuariosService.iniciarSesion(accesoDto.email, accesoDto.clave);
  }

  @Get()
  @ApiOkResponse({ description: "Lista de usuarios" })
  findAll(): UsuarioDto[] {
    return this.usuariosService.findAll();
  }

}
