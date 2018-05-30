import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {DisposistivolugarEntity} from '../dispositivolugar/disposistivolugar.entity';
@Entity('temperatura')
export class TemperaturaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fecha: Date;
    @Column()
    valorTemperatura: number;
    @ManyToOne(type => DisposistivolugarEntity, dispositivolugar => dispositivolugar.temperaturas)
    dispositivolugar: DisposistivolugarEntity;
}