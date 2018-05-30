import { UsuarioEntity } from '../usuario/usuario.entity';
import { TipolugarEntity } from "../tipolugar/tipolugar.entity";
import { DisposistivolugarEntity } from "../dispositivolugar/disposistivolugar.entity";
export declare class LugarEntity {
    id: number;
    nombre: string;
    usuario: UsuarioEntity;
    dispositivolugares: DisposistivolugarEntity[];
    tipoLugar: TipolugarEntity;
}
