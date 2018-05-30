import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import {DispositivolugarEntity} from '../dispositivolugar/dispositivolugar.entity';
@Entity('temperatura')
export class TemperaturaEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fecha: Date;
    @Column()
    valorTemperatura: number;
    @ManyToOne(type => DispositivolugarEntity, dispositivolugar => dispositivolugar.temperaturas)
    dispositivolugar: DispositivolugarEntity;
}