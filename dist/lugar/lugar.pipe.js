"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const peticion_invalida_exception_1 = require("../exceptions/peticion-invalida.exception");
let UsuarioPipe = class UsuarioPipe {
    constructor(schema) {
        this.schema = schema;
    }
    transform(valorEnBrutoDelRequest, metadatosDeLosDecoradoresDelNestjs) {
        const { error, } = Joi.validate(valorEnBrutoDelRequest, this.schema);
        if (error) {
            throw new peticion_invalida_exception_1.PeticionInvalidaException('Peticion invalida', error, 4);
        }
        return valorEnBrutoDelRequest;
    }
};
UsuarioPipe = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], UsuarioPipe);
exports.UsuarioPipe = UsuarioPipe;
//# sourceMappingURL=lugar.pipe.js.map