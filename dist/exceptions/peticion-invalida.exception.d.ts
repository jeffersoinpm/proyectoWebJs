import { HttpException } from '@nestjs/common';
export declare class PeticionInvalidaException extends HttpException {
    private _mensaje;
    private _detalle;
    private _nivelError;
    constructor(_mensaje: any, _detalle: any, _nivelError: any);
}
