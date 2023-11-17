import { Module } from '@nestjs/common';
import { ProductosModule } from './productos/productos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { UbicacionModule } from './ubicacion/ubicacion.module';
import { ServiciosModule } from './servicios/servicios.module';
import { SoporteModule } from './soporte/soporte.module';

@Module({
  imports: [ProductosModule, UsuariosModule, UbicacionModule, ServiciosModule, SoporteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
