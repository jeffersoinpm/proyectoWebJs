import { Get, Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { USUARIO_SCHEMA } from './usuario/usuario.schema';
import { LUGAR_SCHEMA } from './lugar/lugar.schema';
import { TEMPERATURA_SCHEMA } from './temperatura/temperatura.schema';
import { DISPOSITIVO_SCHEMA } from './dispositivo/dispositivo.schema';
import { DISPOSITIVOLUGAR_SCHEMA } from './dispositivolugar/dispositivolugar.schema';
import { TIPOLUGAR_SCHEMA } from './tipolugar/tipolugar.schema';
import {GenericoPipe} from './sesion/generico.pipe';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(): string {
    return this.appService.root();
  }

  @Post('CrearUsuario')
  crearUsuario(
    @Body(
      new GenericoPipe(USUARIO_SCHEMA)) usuario,
  ) {
    console.log('Usuario correcto');
    return usuario;
  }

  @Post('CrearLugar')
  crearLugar(
    @Body(
      new GenericoPipe(LUGAR_SCHEMA)) lugar,
  ) {
    console.log('Lugar correcto');
    return lugar;
  }

  @Post('AgregarTemperatura')
  agregarTemperatura(
    @Body(
      new GenericoPipe(TEMPERATURA_SCHEMA)) temperatura,
  ) {
    console.log('Temperatura correcta');
    return temperatura;
  }

  @Post('AgregarDispositivo')
  agregarDispositivo(
    @Body(
      new GenericoPipe(DISPOSITIVO_SCHEMA)) dispositivo,
  ) {
    console.log('Dispositivo correcta');
    return dispositivo;
  }

  @Post('AgregarDispositivoLugar')
  agregarDispositivoLugar(
    @Body(
      new GenericoPipe(DISPOSITIVOLUGAR_SCHEMA)) dispositivoLugar,
  ) {
    console.log('Dispositivo Lugar correcta');
    return dispositivoLugar;
  }

  @Post('AgregarTipoLugar')
  agregarTipoLugar(
    @Body(
      new GenericoPipe(TIPOLUGAR_SCHEMA)) dispositivoLugar,
  ) {
    console.log('Dispositivo Lugar correcta');
    return dispositivoLugar;
  }
}
