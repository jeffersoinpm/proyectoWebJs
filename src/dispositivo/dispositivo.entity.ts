import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
import {DisposistivolugarEntity} from "../dispositivolugar/disposistivolugar.entity";

@Entity('dispositivo')
export class DispositivoEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @ManyToOne(type => UsuarioEntity, usuario => usuario.lugares)
    usuario: UsuarioEntity;
    @OneToMany(type => DisposistivolugarEntity, dispositivoslugares=> dispositivoslugares.dispositivo)
    dispositivolugares: DisposistivolugarEntity[];

}