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
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async login(userDto) {
        const user = await this.validateUser(userDto);
        return this.generateToken(user);
    }
    async registration(userDto) {
        if (await this.userService.getUserByEmail(userDto.email)) {
            throw new exceptions_1.HttpException('Пользователь c таким email уже существует', enums_1.HttpStatus.BAD_REQUEST);
        }
        if (await this.userService.getUserByLogin(userDto.login)) {
            throw new exceptions_1.HttpException('Пользователь c таким логином уже существует', enums_1.HttpStatus.BAD_REQUEST);
        }
        if (userDto.password != userDto.repeatPass) {
            throw new exceptions_1.HttpException('Пароли не совпадают', enums_1.HttpStatus.BAD_REQUEST);
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.createUser(Object.assign(Object.assign({}, userDto), { password: hashPassword }));
        return this.generateToken(user);
    }
    async generateToken(user) {
        const payload = { email: user.email, id: user.id };
        return {
            token: this.jwtService.sign(payload)
        };
    }
    async validateUser(userDto) {
        const user = await this.userService.getUserByLogin(userDto.login);
        const passwordEquals = await bcrypt.compare(userDto.password, user.password);
        if (user && passwordEquals) {
            return user;
        }
        throw new exceptions_1.UnauthorizedException({ message: "Неправильный логин или пароль" });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        dist_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map