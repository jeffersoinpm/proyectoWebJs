import {Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../usuario/usuario.entity";
@Entity('sesion')
export class SesionEntity{
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(type => UsuarioEntity, usuario => usuario.sesiones)
    usuario:UsuarioEntity;
}