import { Module } from '@nestjs/common';
import { ComunasController } from './comunas.controller';
import { ComunasService } from './comunas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comuna } from './entities/comuna';
import { RegionesService } from './regiones.service';
import { RegionesController } from './regiones.controller';
import { Region } from './entities/region';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Region, Comuna
    ]),
  ],
  controllers: [RegionesController, ComunasController],
  providers: [RegionesService, ComunasService],
  exports: [RegionesService, ComunasService]
})
export class UbicacionModule {}
