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
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuario/usuario.entity");
const tipolugar_entity_1 = require("../tipolugar/tipolugar.entity");
const disposistivolugar_entity_1 = require("../dispositivolugar/disposistivolugar.entity");
let LugarEntity = class LugarEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], LugarEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ length: 500 }),
    __metadata("design:type", String)
], LugarEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.ManyToOne(type => usuario_entity_1.UsuarioEntity, usuario => usuario.lugares),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], LugarEntity.prototype, "usuario", void 0);
__decorate([
    typeorm_1.OneToMany(type => disposistivolugar_entity_1.DisposistivolugarEntity, dispositivoslugares => dispositivoslugares.lugar),
    __metadata("design:type", Array)
], LugarEntity.prototype, "dispositivolugares", void 0);
__decorate([
    typeorm_1.ManyToOne(type => tipolugar_entity_1.TipolugarEntity, tipoLugar => tipoLugar.lugares),
    __metadata("design:type", tipolugar_entity_1.TipolugarEntity)
], LugarEntity.prototype, "tipoLugar", void 0);
LugarEntity = __decorate([
    typeorm_1.Entity('lugar')
], LugarEntity);
exports.LugarEntity = LugarEntity;
//# sourceMappingURL=lugar.entity.js.map