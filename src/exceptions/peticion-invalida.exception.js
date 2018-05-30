"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var PeticionInvalidaException = /** @class */ (function (_super) {
    __extends(PeticionInvalidaException, _super);
    function PeticionInvalidaException(_mensaje, _detalle, _nivelError) {
        var _this = _super.call(this, {
            mensaje: _mensaje,
            detalle: _detalle,
            nivelError: _nivelError,
            status: common_1.HttpStatus.BAD_REQUEST,
        }, // Mensaje u Objeto
        common_1.HttpStatus.BAD_REQUEST) || this;
        _this._mensaje = _mensaje;
        _this._detalle = _detalle;
        _this._nivelError = _nivelError;
        return _this;
    }
    return PeticionInvalidaException;
}(common_1.HttpException));
exports.PeticionInvalidaException = PeticionInvalidaException;
