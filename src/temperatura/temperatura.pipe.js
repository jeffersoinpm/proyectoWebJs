"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var Joi = require("joi");
var peticion_invalida_exception_1 = require("../exceptions/peticion-invalida.exception");
var TemperaturaPipe = /** @class */ (function () {
    function TemperaturaPipe(schema) {
        this.schema = schema;
    }
    TemperaturaPipe.prototype.transform = function (valorEnBrutoDelRequest, metadatosDeLosDecoradoresDelNestjs) {
        var error = Joi.validate(valorEnBrutoDelRequest, // objeto a validar
        this.schema).error;
        if (error) {
            throw new peticion_invalida_exception_1.PeticionInvalidaException('Peticion invalida', error, 4);
        }
        return valorEnBrutoDelRequest;
    };
    TemperaturaPipe = __decorate([
        common_1.Injectable()
    ], TemperaturaPipe);
    return TemperaturaPipe;
}());
exports.TemperaturaPipe = TemperaturaPipe;
