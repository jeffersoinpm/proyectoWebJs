import { Controller, Get, Param, Res } from '@nestjs/common';
import { DispositivoService } from './dispositivo.service';

@Controller('dispositivo')

export class DispositivoController {

  constructor(private _dispositivoService: DispositivoService){

  }

  @Get('/:idDispositivo')
  async buscarConductores(
    @Param() paramParams,
    @Res() response,
  ) {
    const dispositivos = await this._dispositivoService.buscarID(paramParams.idDispositivo);
    return response.status(202).send(dispositivos);
  }
}
