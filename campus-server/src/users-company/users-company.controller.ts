import { Controller } from '@nestjs/common';
import { UsersCompanyService } from './users-company.service';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
import { Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@Controller('users-company')
export class UsersCompanyController {
    constructor(private usersCompanyService: UsersCompanyService) {}

    @Post()
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
}
