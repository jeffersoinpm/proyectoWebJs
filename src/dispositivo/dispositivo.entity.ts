import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {UsuarioEntity} from '../usuario/usuario.entity';
import {DispositivolugarEntity} from '../dispositivolugar/dispositivolugar.entity';

@Entity('dispositivo')
export class DispositivoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @ManyToOne(type => UsuarioEntity, usuario => usuario.lugares)
    usuario: UsuarioEntity;
    @OneToMany(type => DispositivolugarEntity, dispositivoslugares=> dispositivoslugares.dispositivo)
    dispositivolugares: DispositivolugarEntity[];

}