"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class PeticionInvalidaException extends common_1.HttpException {
    constructor(_mensaje, _detalle, _nivelError) {
        super({
            mensaje: _mensaje,
            detalle: _detalle,
            nivelError: _nivelError,
            status: common_1.HttpStatus.BAD_REQUEST,
        }, common_1.HttpStatus.BAD_REQUEST);
        this._mensaje = _mensaje;
        this._detalle = _detalle;
        this._nivelError = _nivelError;
    }
}
exports.PeticionInvalidaException = PeticionInvalidaException;
//# sourceMappingURL=peticion-invalida.exception.js.map