import { SesionEntity } from '../sesion/sesion.entity';
import { LugarEntity } from '../lugar/lugar.entity';
export declare class UsuarioEntity {
    id: number;
    nombreUsuario: string;
    contrasena: string;
    correo: string;
    avatar: string;
    sesiones: SesionEntity[];
    lugares: LugarEntity[];
}
