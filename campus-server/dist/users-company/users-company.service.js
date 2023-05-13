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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCompanyService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
const users_company_model_1 = require("./users-company.model");
const jwt_1 = require("@nestjs/jwt");
const create_role_dto_1 = require("../roles/dto/create-role.dto");
let UsersCompanyService = class UsersCompanyService {
    constructor(userCompanyRepository, roleService, jwtService) {
        this.userCompanyRepository = userCompanyRepository;
        this.roleService = roleService;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const user = await this.userCompanyRepository.create(dto);
        let role = await this.roleService.getRoleByValue("user_company");
        if (role == null) {
            const response = await this.roleService.createRoles(new create_role_dto_1.CreateRoleDto("user_company", "Роль пользователя с компании"));
        }
        role = await this.roleService.getRoleByValue("user_company");
        console.log(role);
        await user.$set('roles', [role.id]);
        user.roles = [role];
        console.log(user.roles);
        return user;
    }
    async getAllUsers() {
        const users = await this.userCompanyRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userCompanyRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async getUserByLogin(login) {
        const user = await this.userCompanyRepository.findOne({ where: { login }, include: { all: true } });
        return user;
    }
    async getVacanciesByUser(req) {
        try {
            const user = await this.getUserCompanyByRequest(req);
            return user.vacancies;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getUserCompanyByRequest(req) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        console.log(this.jwtService.verify(token).login);
        const user = await this.getUserByLogin(this.jwtService.verify(token).login);
        return user;
    }
};
UsersCompanyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_company_model_1.UserCompany)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService,
        jwt_1.JwtService])
], UsersCompanyService);
exports.UsersCompanyService = UsersCompanyService;
//# sourceMappingURL=users-company.service.js.map