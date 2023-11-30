import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { SoporteModule } from './soporte/soporte.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comuna } from './ubicacion/entities/comuna';
import { CargaDatosService } from './cargaDatos.service';
import { Categoria } from './productos/entities/categoria';
import { Subcategoria } from './productos/entities/subcategoria';
import { Especie } from './productos/entities/especie';
import { Producto } from './productos/entities/producto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [ Comuna, Categoria, Subcategoria, Especie, Producto ],
    }),
    ProductosModule, UsuariosModule, UbicacionModule, ServiciosModule, SoporteModule],
  controllers: [],
  providers: [ CargaDatosService ],
})
export class AppModule {}
