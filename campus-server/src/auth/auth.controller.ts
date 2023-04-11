import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserCompanyDto } from 'src/users-company/dto/create-user-company.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService){}

    @Post('/login')
    login(@Body() userDto){
        return this.authService.login(userDto);
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
