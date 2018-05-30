import {Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {LugarEntity} from '../lugar/lugar.entity';
import {DispositivoEntity} from '../dispositivo/dispositivo.entity';
import {TemperaturaEntity} from '../temperatura/temperatura.entity';

@Entity('dispositivolugar')
export class DisposistivolugarEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => LugarEntity, lugar => lugar.dispositivolugares)
    lugar: LugarEntity;
    @ManyToOne(type => DispositivoEntity, dispositivo => dispositivo.dispositivolugares)
    dispositivo: DispositivoEntity;
    @OneToMany(type => TemperaturaEntity, temperatura=> temperatura.dispositivolugar)
    temperaturas: TemperaturaEntity[];
}