"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var usuario_pipe_1 = require("./usuario/usuario.pipe");
var usuario_schema_1 = require("./usuario/usuario.schema");
var lugar_pipe_1 = require("./lugar/lugar.pipe");
var lugar_schema_1 = require("./lugar/lugar.schema");
var temperatura_schema_1 = require("./temperatura/temperatura.schema");
var temperatura_pipe_1 = require("./temperatura/temperatura.pipe");
var AppController = /** @class */ (function () {
    function AppController(appService) {
        this.appService = appService;
    }
    AppController.prototype.root = function () {
        return this.appService.root();
    };
    AppController.prototype.crearUsuario = function (usuario) {
        console.log('Usuario correcto');
        return usuario;
    };
    AppController.prototype.crearLugar = function (lugar) {
        console.log('Lugar correcto');
        return lugar;
    };
    AppController.prototype.agregarTemperatura = function (temperatura) {
        console.log('Temperatura correcta');
        return temperatura;
    };
    __decorate([
        common_1.Get()
    ], AppController.prototype, "root", null);
    __decorate([
        common_1.Post('CrearUsuario'),
        __param(0, common_1.Body(new usuario_pipe_1.UsuarioPipe(usuario_schema_1.USUARIO_SCHEMA)))
    ], AppController.prototype, "crearUsuario", null);
    __decorate([
        common_1.Post('CrearLugar'),
        __param(0, common_1.Body(new lugar_pipe_1.LugarPipe(lugar_schema_1.LUGAR_SCHEMA)))
    ], AppController.prototype, "crearLugar", null);
    __decorate([
        common_1.Post('AgregarTemperatura'),
        __param(0, common_1.Body(new temperatura_pipe_1.TemperaturaPipe(temperatura_schema_1.TEMPERATURA_SCHEMA)))
    ], AppController.prototype, "agregarTemperatura", null);
    AppController = __decorate([
        common_1.Controller()
    ], AppController);
    return AppController;
}());
exports.AppController = AppController;
