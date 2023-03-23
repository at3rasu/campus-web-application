import { Injectable } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException, UnauthorizedException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcryptjs'
import { User } from 'src/users/users.model';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService,
                private jwtService: JwtService){}

    async login(userDto: CreateUserDto){
        const user = await this.validateUser(userDto)
        return this.generateToken(user);
    }

    async registration(userDto: CreateUserDto){
        if (await this.userService.getUserByEmail(userDto.email)) {
            throw new HttpException('Пользователь c таким email уже существует', HttpStatus.BAD_REQUEST)
        }
        if (await this.userService.getUserByLogin(userDto.login)) {
            throw new HttpException('Пользователь c таким логином уже существует', HttpStatus.BAD_REQUEST)
        }
        if (userDto.password != userDto.repeatPass){
            throw new HttpException('Пароли не совпадают', HttpStatus.BAD_REQUEST)
        }
        const hashPassword = await bcrypt.hash(userDto.password, 5)
        const user = await this.userService.createUser({...userDto, password: hashPassword})
        return this.generateToken(user);
    }

    private async generateToken(user: User){
        const payload = {login: user.login, id: user.id}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    private async validateUser(userDto: CreateUserDto){
        const user = await this.userService.getUserByLogin(userDto.login)
        const passwordEquals = await bcrypt.compare(userDto.password, user.password)
        if (user && passwordEquals){
            return user
        }
        console.log("fesdf")
        throw new UnauthorizedException({message: "Неправильный логин или пароль"})
    }
}
