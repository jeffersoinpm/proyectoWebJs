import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {LugarEntity} from '../lugar/lugar.entity';

@Entity('tipolugar')
export class TipolugarEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @OneToMany(type => LugarEntity, lugar => lugar.usuario)
    lugares: LugarEntity[];
}