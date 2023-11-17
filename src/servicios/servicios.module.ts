import { Module } from '@nestjs/common';
import { PeluqueriasController } from './peluquerias.controller';
import { PeluqueriasService } from './peluquerias.service';

@Module({
  imports: [],
  controllers: [PeluqueriasController],
  providers: [PeluqueriasService],
})
export class ServiciosModule {}
