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
import { SubcategoriaDos } from './entities/subcategoriaDos';
import { SubcategoriasDosController } from './subcategoriasDos.controller';
import { SubcategoriasDosService } from './subcategoriasDos.service';
import { CategoriasController } from './categorias.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Especie, Categoria, Subcategoria, SubcategoriaDos, Producto
    ]),
  ],
  controllers: [ CategoriasController, SubcategoriasController, SubcategoriasDosController, ProductosController ],
  providers: [CategoriasService, SubcategoriasService, SubcategoriasDosService, ProductosService, EspeciesService],
  exports: [CategoriasService, SubcategoriasService, SubcategoriasDosService, ProductosService, EspeciesService]
})
export class ProductosModule {}
