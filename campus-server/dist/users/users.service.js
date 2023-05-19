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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const roles_service_1 = require("../roles/roles.service");
const users_model_1 = require("./users.model");
const common_2 = require("@nestjs/common");
const create_role_dto_1 = require("../roles/dto/create-role.dto");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    constructor(userRepository, roleService, jwtService) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.jwtService = jwtService;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        let role = await this.roleService.getRoleByValue("user");
        if (role == null) {
            const response = await this.roleService.createRoles(new create_role_dto_1.CreateRoleDto("user", "Роль пользователя"));
        }
        role = await this.roleService.getRoleByValue("user");
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({ where: { email }, include: { all: true } });
        return user;
    }
    async getUserByLogin(login) {
        const user = await this.userRepository.findOne({ where: { login }, include: { all: true } });
        return user;
    }
    async addRole(dto) {
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            return dto;
        }
        throw new common_2.HttpException('Пользователь или роль не были найдены', common_2.HttpStatus.NOT_FOUND);
    }
    async getResumeByUser(req) {
        try {
            const user = await this.getUserByRequest(req);
            return user.resume;
        }
        catch (e) {
            console.log(e);
        }
    }
    async getUserByRequest(req) {
        const authHeader = req.headers.authorization;
        const token = authHeader.split(' ')[1];
        const user = await this.getUserByLogin(this.jwtService.verify(token).login);
        return user;
    }
    async updateUser(id, updateuserDto) {
        const user = await this.userRepository.update(updateuserDto, { where: { id }, returning: true, });
        return user;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map