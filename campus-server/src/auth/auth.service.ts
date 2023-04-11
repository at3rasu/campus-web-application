import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';
import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { UsersCompanyService } from 'src/users-company/users-company.service';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private userCompanyService: UsersCompanyService,
                private jwtService: JwtService){}

    async login(userDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user);
    }

    async registration(userDto: CreateUserDto){
        //this.validateRegistration(userDto)
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user);
    }

    async registrationUserCompany(userDto: CreateUserCompanyDto){
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const userCompany = await this.userCompanyService.createUser({...userDto, password: hashPassword})
        return this.generateToken(userCompany);
    }

    private async validateRegistration(user){
        if (await this.userService.getUserByEmail(user.email)) {
            throw new HttpException('Пользователь c таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        if (await this.userService.getUserByLogin(user.login)) {
            throw new HttpException('Пользователь c таким логином уже существует', HttpStatus.BAD_REQUEST)
        }
        if (user.password != user.repeatPass){
            throw new HttpException('Пароли не совпадают', HttpStatus.BAD_REQUEST)
        }
    }

    private async generateToken(user){
        const payload = {login: user.login, id: user.id}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto){
        const user = await this.userService.getUserByLogin(userDto.login)
        if (user == null){
            const user = await this.userCompanyService.getUserByLogin(userDto.login);
            return this.equalUser(user, userDto)
        }
        return this.equalUser(user, userDto)
    }

    private async equalUser(user, userDto){
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals){
            return user
        }
        throw new UnauthorizedException({message: "Неправильный логин или пароль"})
    }
}
