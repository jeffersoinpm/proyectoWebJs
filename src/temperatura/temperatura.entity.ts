import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {UsuarioEntity} from '../usuario/usuario.entity';
import {LugarEntity} from '../lugar/lugar.entity';
@Entity('temperatura')
export class TemperaturaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fecha: Date;
    @Column()
    valorTemperatura: number;
    @ManyToOne(type => LugarEntity, lugar => lugar.temperaturas)
    lugar: LugarEntity;
}