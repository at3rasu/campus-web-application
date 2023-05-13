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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const enums_1 = require("@nestjs/common/enums");
const exceptions_1 = require("@nestjs/common/exceptions");
const dist_1 = require("@nestjs/jwt/dist");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcryptjs");
const users_company_service_1 = require("../users-company/users-company.service");
let AuthService = class AuthService {
    constructor(userService, userCompanyService, jwtService) {
        this.userService = userService;
        this.userCompanyService = userCompanyService;
        this.jwtService = jwtService;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken({ login: user.login, id: user.id, roles: user.roles });
    }
    async loginUserCompany(userDto) {
        const user = await this.validateUserCompany(userDto);
        const result = this.generateToken({ login: user.login, id: user.id, roles: user.roles, vacancies: user.vacancies });
        return result;
    }
    async registration(userDto) {
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return this.generateToken(user);
    }
    async registrationUserCompany(userDto) {
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userCompanyService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return this.generateToken({ login: user.login, id: user.id, roles: user.roles, vacancies: user.vacancies });
    }
    async validateRegistration(user) {
        if (await this.userService.getUserByEmail(user.email)) {
            throw new exceptions_1.HttpException('Пользователь c таким email уже существует', enums_1.HttpStatus.BAD_REQUEST);
        }
        if (await this.userService.getUserByLogin(user.login)) {
            throw new exceptions_1.HttpException('Пользователь c таким логином уже существует', enums_1.HttpStatus.BAD_REQUEST);
        }
        if (user.password != user.repeatPass) {
            throw new exceptions_1.HttpException('Пароли не совпадают', enums_1.HttpStatus.BAD_REQUEST);
        }
    }
    async generateToken(payload) {
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByLogin(userDto.login);
        if (user == null) {
            throw new exceptions_1.UnauthorizedException({ message: "Неправильный логин или пароль" });
        }
        return this.equalUser(user, userDto);
    }
    async validateUserCompany(userDto) {
        const user = await this.userCompanyService.getUserByLogin(userDto.login);
        if (user == null) {
            throw new exceptions_1.UnauthorizedException({ message: "Неправильный логин или пароль" });
        }
        return this.equalUser(user, userDto);
    }
    async equalUser(user, userDto) {
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new exceptions_1.UnauthorizedException({ message: "Неправильный логин или пароль" });
    }
    async refreshToken(login) {
        const user = await this.userCompanyService.getUserByLogin(login);
        return this.generateToken({ login: user.login, id: user.id, roles: user.roles, vacancies: user.vacancies });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        users_company_service_1.UsersCompanyService,
        dist_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map