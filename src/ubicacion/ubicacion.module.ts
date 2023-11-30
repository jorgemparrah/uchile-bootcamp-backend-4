import { Module } from '@nestjs/common';
import { ComunasController } from './comunas.controller';
import { ComunasService } from './comunas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comuna } from './entities/comuna';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Comuna
    ]),
  ],
  controllers: [ComunasController],
  providers: [ComunasService],
  exports: [ComunasService]
})
export class UbicacionModule {}
