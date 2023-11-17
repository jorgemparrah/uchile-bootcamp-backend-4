import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactoService } from './contactos.service';
import { ContactoDto } from './dto/contacto.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Contacto')
@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  @ApiBody({ type: ContactoDto })
  @ApiCreatedResponse({ description: 'La solicitud de contacto se ha recibido correctamente' })
  create(@Body() contactoDto: ContactoDto): string {
    return this.contactoService.create(contactoDto);
  }

  @Get()
  @ApiOkResponse({ description: 'Lista de solicitudes de contacto', type: ContactoDto, isArray: true })
  findAll(): ContactoDto[] {
    return this.contactoService.findAll();
  }

}
