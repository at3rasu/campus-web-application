import { Controller } from '@nestjs/common';
import { UsersCompanyService } from './users-company.service';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
import { Post, Get, Body, Req, UseGuards, Headers } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { UsersService } from 'src/users/users.service';

@Controller('users-company')
export class UsersCompanyController {
    constructor(private usersCompanyService: UsersCompanyService,
                private usersService: UsersService) {}

    @Post('/insert')
    create(@Body() userCompanyDto: CreateUserCompanyDto){
        return this.usersCompanyService.createUser(userCompanyDto);
    }

    @Get()
    getAll(){
        return this.usersCompanyService.getAllUsers();
    }

    @Get('/get_vacancies')
    @Roles('admin', 'user_company')
    @UseGuards(RolesGuard)
    getVacanciesByUser(@Req() request: Request){
        return this.usersCompanyService.getVacanciesByUser(request)
    }

    @Get('/get_user')
    @Roles('admin', 'user')
    @UseGuards(RolesGuard)
    getuserByToken(@Headers('authorization') token){
        return this.usersCompanyService.getUserByToken(token.split(' ')[1]);
    }
}
