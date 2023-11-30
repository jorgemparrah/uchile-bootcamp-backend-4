import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoriasService } from './productos/categorias.service';
import { EspeciesService } from './productos/especies.service';
import { ProductosService } from './productos/productos.service';
import { SubcategoriasService } from './productos/subcategorias.service';
import { ComunasService } from './ubicacion/comunas.service';

@Injectable()
export class CargaDatosService implements OnModuleInit {

  constructor(
    private readonly comunasService: ComunasService,
    private readonly especiesService: EspeciesService,
    private readonly categoriaService: CategoriasService,
    private readonly subcategoriaService: SubcategoriasService,
    private readonly productosService: ProductosService,
  ) {}

  onModuleInit() {
    this.comunasService.fillData();
    this.especiesService.fillData();
    this.categoriaService.fillData();
    this.subcategoriaService.fillData();
    this.productosService.fillData();
  }

}
