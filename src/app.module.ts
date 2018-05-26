import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from './usuario/usuario.entity';

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
      TypeOrmModule.forFeature([UsuarioEntity])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
