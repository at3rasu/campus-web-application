import { Body, Controller, Post, Res, Req } from '@nestjs/common';
import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() userDto, @Res({ passthrough: true }) resp: Response, @Req() request: Request){
        const user = this.authService.login(userDto, resp)
        return user;
    }

    @Post('/registration')
    registration(@Body() userDto: CreateUserDto){
        return this.authService.registration(userDto);
    }

    @Post('/registration_userCompany')
    registrationUserCompany(@Body() userDto: CreateUserCompanyDto){
        return this.authService.registrationUserCompany(userDto);
    }
}
