"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCompanyModule = void 0;
const common_1 = require("@nestjs/common");
const roles_model_1 = require("../roles/roles.model");
const users_company_controller_1 = require("./users-company.controller");
const users_company_model_1 = require("./users-company.model");
const users_company_service_1 = require("./users-company.service");
const sequelize_1 = require("@nestjs/sequelize");
const roles_module_1 = require("../roles/roles.module");
const user_company_roles_1 = require("../roles/user_company_roles");
const auth_module_1 = require("../auth/auth.module");
const vacancies_model_1 = require("../vacancies/vacancies.model");
const jwt_1 = require("@nestjs/jwt");
let UsersCompanyModule = class UsersCompanyModule {
};
UsersCompanyModule = __decorate([
    (0, common_1.Module)({
        providers: [users_company_service_1.UsersCompanyService],
        controllers: [users_company_controller_1.UsersCompanyController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([roles_model_1.Role, users_company_model_1.UserCompany, user_company_roles_1.UserCompanyRoles, vacancies_model_1.Vacancy]),
            roles_module_1.RolesModule,
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || 'SECRET',
                signOptions: {
                    expiresIn: '30m'
                }
            }),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        exports: [
            users_company_service_1.UsersCompanyService
        ]
    })
], UsersCompanyModule);
exports.UsersCompanyModule = UsersCompanyModule;
//# sourceMappingURL=users-company.module.js.map