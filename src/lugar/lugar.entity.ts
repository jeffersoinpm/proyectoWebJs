import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {UsuarioEntity} from '../usuario/usuario.entity';
import {SesionEntity} from '../sesion/sesion.entity';
import {TemperaturaEntity} from '../temperatura/temperatura.entity';
@Entity('lugar')
export class LugarEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ length: 500 })
    nombre: string;
    @ManyToOne(type => UsuarioEntity, usuario => usuario.lugares)
    usuario: UsuarioEntity;
    @OneToMany(type => TemperaturaEntity, temperatura => temperatura.lugar)
    temperaturas: TemperaturaEntity[];
}