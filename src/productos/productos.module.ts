import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { SubcategoriasController } from './subcategorias.controller';
import { SubcategoriasService } from './subcategorias.service';

@Module({
  controllers: [ProductosController, SubcategoriasController],
  providers: [ProductosService, SubcategoriasService],
})
export class ProductosModule {}
