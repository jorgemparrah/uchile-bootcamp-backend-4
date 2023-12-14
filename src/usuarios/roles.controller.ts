import { Controller, Get, Logger } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { RolDto } from './dto/rol.dto';
import { RolesService } from './roles.service';

@ApiTags('Usuarios')
@Controller('roles')
export class RolesController {
  private readonly logger = new Logger(RolesController.name);

  constructor(
    private readonly rolesService: RolesService
  ) {}

  @Get()
  @ApiOkResponse({ description: "Lista de roles" })
  async findAll(): Promise<RolDto[]> {
    const resultado = await this.rolesService.findAll();
    return resultado;
  }

}
