import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {SesionEntity} from "../sesion/sesion.entity";
import {LugarEntity} from "../lugar/lugar.entity";
@Entity('usuario')
export class UsuarioEntity {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ length: 500 })
    nombreUsuario: string;
    @Column({ length: 500 })
    correo: string;
    @Column('text')
    avatar: string;
    @OneToMany(type => SesionEntity, sesion => sesion.usuario)
    sesiones: SesionEntity[];
    @OneToMany(type => LugarEntity, lugar => lugar.usuario)
    lugares: LugarEntity[];
}