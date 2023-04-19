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
exports.UserCompanyRoles = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const users_company_model_1 = require("../users-company/users-company.model");
const roles_model_1 = require("./roles.model");
let UserCompanyRoles = class UserCompanyRoles extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], UserCompanyRoles.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => users_company_model_1.UserCompany),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserCompanyRoles.prototype, "userCompanyId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => roles_model_1.Role),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }),
    __metadata("design:type", Number)
], UserCompanyRoles.prototype, "roleId", void 0);
UserCompanyRoles = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'user_company_roles', createdAt: false, updatedAt: false })
], UserCompanyRoles);
exports.UserCompanyRoles = UserCompanyRoles;
//# sourceMappingURL=user_company_roles.js.map