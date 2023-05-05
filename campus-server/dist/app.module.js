"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const users_module_1 = require("./users/users.module");
const users_model_1 = require("./users/users.model");
const roles_module_1 = require("./roles/roles.module");
const roles_model_1 = require("./roles/roles.model");
const user_roles_1 = require("./roles/user-roles");
const auth_module_1 = require("./auth/auth.module");
const users_company_module_1 = require("./users-company/users-company.module");
const users_company_model_1 = require("./users-company/users-company.model");
const user_company_roles_1 = require("./roles/user_company_roles");
const vacancies_model_1 = require("./vacancies/vacancies.model");
const vacancies_module_1 = require("./vacancies/vacancies.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.development.env'
            }),
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'postgres',
                host: process.env.POSTGRES_HOST,
                port: Number(process.env.POSTGRESS_PORT),
                username: process.env.POSTGRES_USER,
                password: process.env.POSTGRESS_PASSWORD,
                database: process.env.POSTGRES_DB,
                models: [users_model_1.User, roles_model_1.Role, user_roles_1.UserRoles, users_company_model_1.UserCompany, vacancies_model_1.Vacancy, user_company_roles_1.UserCompanyRoles],
                autoLoadModels: true
            }),
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            users_company_module_1.UsersCompanyModule,
            vacancies_module_1.VacanciesModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map