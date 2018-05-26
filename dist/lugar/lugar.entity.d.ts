import { UsuarioEntity } from "../usuario/usuario.entity";
import { TemperaturaEntity } from "../temperatura/temperatura.entity";
export declare class LugarEntity {
    id: number;
    nombre: string;
    usuario: UsuarioEntity;
    temperaturas: TemperaturaEntity[];
}
