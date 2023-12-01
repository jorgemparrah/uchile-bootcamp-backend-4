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

  async onModuleInit() {
    await this.comunasService.fillData();
    await this.especiesService.fillData();
    await this.categoriaService.fillData();
    await this.subcategoriaService.fillData();
    await this.productosService.fillData();
  }

}
