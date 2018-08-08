import { Injectable } from '@nestjs/common';
import { DispositivoEntity } from './dispositivo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DispositivoService {
  constructor(
    @InjectRepository(DispositivoEntity)
    private readonly _dispositivoRepository: Repository<DispositivoEntity>) {
  }

  async listarTodos(): Promise<DispositivoEntity[]> {
    return await this._dispositivoRepository.find();
  }

  async buscarID(idBuscar: number): Promise<DispositivoEntity[]> {
    return await this._dispositivoRepository.find({ id: idBuscar });
  }
}