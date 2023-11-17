import { Injectable } from '@nestjs/common';
import { ContactoDto } from './dto/contacto.dto';
import { ContactoMapper } from './mapper/contacto.mapper';
import { SOLICITUDES_CONTACTO } from 'src/datos';

@Injectable()
export class ContactoService {

  create(contactoDto: ContactoDto): string {
    SOLICITUDES_CONTACTO.push(ContactoMapper.toEntity(contactoDto));
    return 'La solicitud de contacto se ha recibido correctamente';
  }

  findAll(): ContactoDto[] {
    return ContactoMapper.toDtoList(SOLICITUDES_CONTACTO);
  }

}
