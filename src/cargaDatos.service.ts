import { Injectable, OnModuleInit } from '@nestjs/common';
import { CategoriasService } from './productos/categorias.service';
import { EspeciesService } from './productos/especies.service';
import { ProductosService } from './productos/productos.service';
import { SubcategoriasService } from './productos/subcategorias.service';
import { ComunasService } from './ubicacion/comunas.service';
import { RegionesService } from './ubicacion/regiones.service';
import { SubcategoriasDosService } from './productos/subcategoriasDos.service';
import { UsuariosService } from './usuarios/usuarios.service';
import { RolesService } from './usuarios/roles.service';
import { TiendasService } from './productos/tiendas.service';
import { StockService } from './productos/stock.service';

@Injectable()
export class CargaDatosService implements OnModuleInit {

  constructor(
    private readonly regionesService: RegionesService,
    private readonly comunasService: ComunasService,
    private readonly rolesService: RolesService,
    private readonly usuariosService: UsuariosService,
    private readonly especiesService: EspeciesService,
    private readonly categoriasService: CategoriasService,
    private readonly subcategoriasService: SubcategoriasService,
    private readonly subcategoriasDosService: SubcategoriasDosService,
    private readonly productosService: ProductosService,
    private readonly tiendasService: TiendasService,
    private readonly stockService: StockService,
  ) {}

  async onModuleInit() {
    await this.regionesService.fillData();
    await this.comunasService.fillData();

    await this.rolesService.fillData();
    await this.usuariosService.fillData();

    await this.especiesService.fillData();
    await this.categoriasService.fillData();
    await this.subcategoriasService.fillData();
    await this.subcategoriasDosService.fillData();
    await this.productosService.fillData();
    await this.tiendasService.fillData();
    await this.stockService.fillData();
  }

}
