import { Get, Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { UsuarioPipe } from './usuario/usuario.pipe';
import { USUARIO_SCHEMA } from './usuario/usuario.schema';
import { LugarPipe } from './lugar/lugar.pipe';
import { LUGAR_SCHEMA } from './lugar/lugar.schema';

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
      new UsuarioPipe(USUARIO_SCHEMA)) usuario,
  ) {
    console.log('Usuario correcto');
    return usuario;
  }

  @Post('CrearLugar')
  crearLugar(
    @Body(
      new LugarPipe(LUGAR_SCHEMA)) lugar,
  ) {
    console.log('Usuario correcto');
    return lugar;
  }
}
