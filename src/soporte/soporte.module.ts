import { Module } from '@nestjs/common';
import { ContactoController } from './contactos.controller';
import { ContactoService } from './contactos.service';

@Module({
  controllers: [ContactoController],
  providers: [ContactoService],
})
export class SoporteModule {}
