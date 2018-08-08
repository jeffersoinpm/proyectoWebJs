import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from './usuario/usuario.entity';
import { DispositivoService } from './dispositivo/dispositivo.service';
import { DispositivoController } from './dispositivo/dispositivo.controller';
import { DispositivoEntity } from './dispositivo/dispositivo.entity';
import { DispositivolugarEntity } from './dispositivolugar/dispositivolugar.entity';
import { TemperaturaEntity } from './temperatura/temperatura.entity';
import { TipolugarEntity } from './tipolugar/tipolugar.entity';
import { LugarEntity } from './lugar/lugar.entity';
import { SesionEntity } from './sesion/sesion.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'aplicacioneswebjs.mysql.database.azure.com',
      port: 3306,
      username: 'jeffersoinpm@aplicacioneswebjs',
      password: 'Aplicacionesweb123',
      database: 'web',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
  }),
      TypeOrmModule.forFeature([UsuarioEntity, DispositivoEntity, DispositivolugarEntity, TemperaturaEntity, TipolugarEntity, LugarEntity, SesionEntity])],
  controllers: [AppController, DispositivoController],
  providers: [AppService, DispositivoService],
})
export class AppModule {}
