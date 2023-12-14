import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargaDatosService } from './cargaDatos.service';
import { Categoria } from './productos/entities/categoria';
import { Especie } from './productos/entities/especie';
import { Producto } from './productos/entities/producto';
import { Subcategoria } from './productos/entities/subcategoria';
import { SubcategoriaDos } from './productos/entities/subcategoriaDos';
import { ProductosModule } from './productos/productos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { SoporteModule } from './soporte/soporte.module';
import { Comuna } from './ubicacion/entities/comuna';
import { Region } from './ubicacion/entities/region';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { Rol } from './usuarios/entities/rol';
import { Usuario } from './usuarios/entities/usuario';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/datos.sql',
      synchronize: true,
      entities: [ Region, Comuna, Categoria, Subcategoria, SubcategoriaDos, Especie, Producto, Rol, Usuario ],
    }),
    ProductosModule, UsuariosModule, UbicacionModule, ServiciosModule, SoporteModule],
  controllers: [],
  providers: [ CargaDatosService ],
})
export class AppModule {}
