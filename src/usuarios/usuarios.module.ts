import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario';
import { Rol } from './entities/rol';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: "CLAVE_GRUPO4",
      signOptions: {
        expiresIn: '300s'
      }
    }),
    TypeOrmModule.forFeature([
      Rol, Usuario
    ]),
  ],
  controllers: [ UsuariosController, RolesController ],
  providers: [ UsuariosService, RolesService ],
  exports: [ UsuariosService, RolesService ]
})
export class UsuariosModule {}
