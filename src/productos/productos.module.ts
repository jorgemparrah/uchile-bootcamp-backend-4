import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { SubcategoriasController } from './subcategorias.controller';
import { SubcategoriasService } from './subcategorias.service';
import { CategoriasService } from './categorias.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Especie } from './entities/especie';
import { Producto } from './entities/producto';
import { Categoria } from './entities/categoria';
import { Subcategoria } from './entities/subcategoria';
import { EspeciesService } from './especies.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Especie, Categoria, Subcategoria, Producto
    ]),
  ],
  controllers: [ProductosController, SubcategoriasController],
  providers: [ProductosService, SubcategoriasService, CategoriasService, EspeciesService],
  exports: [ProductosService, SubcategoriasService, CategoriasService, EspeciesService]
})
export class ProductosModule {}
