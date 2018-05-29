import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    root(): string;
    crearUsuario(usuario: any): any;
    crearLugar(lugar: any): any;
    agregarTemperatura(temperatura: any): any;
}
