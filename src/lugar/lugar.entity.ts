import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {UsuarioEntity} from '../usuario/usuario.entity';
import {TipolugarEntity} from "../tipolugar/tipolugar.entity";
import {DisposistivolugarEntity} from "../dispositivolugar/disposistivolugar.entity";
@Entity('lugar')
export class LugarEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @ManyToOne(type => UsuarioEntity, usuario => usuario.lugares)
    usuario: UsuarioEntity;
    @OneToMany(type => DisposistivolugarEntity, dispositivoslugares=> dispositivoslugares.lugar)
    dispositivolugares: DisposistivolugarEntity[];
    @ManyToOne(type => TipolugarEntity, tipoLugar => tipoLugar.lugares)
    tipoLugar: TipolugarEntity;
}