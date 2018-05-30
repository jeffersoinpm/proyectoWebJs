import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {UsuarioEntity} from '../usuario/usuario.entity';
import {TipolugarEntity} from '../tipolugar/tipolugar.entity';
import {DispositivolugarEntity} from '../dispositivolugar/dispositivolugar.entity';
@Entity('lugar')
export class LugarEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @ManyToOne(type => UsuarioEntity, usuario => usuario.lugares)
    usuario: UsuarioEntity;
    @OneToMany(type => DispositivolugarEntity, dispositivoslugares=> dispositivoslugares.lugar)
    dispositivolugares: DispositivolugarEntity[];
    @ManyToOne(type => TipolugarEntity, tipoLugar => tipoLugar.lugares)
    tipoLugar: TipolugarEntity;
}