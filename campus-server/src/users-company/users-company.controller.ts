import { Controller } from '@nestjs/common';
import { UsersCompanyService } from './users-company.service';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
import { Post, Get, Body, Req } from '@nestjs/common';

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
    getVacanciesByUser(@Req() request: Request){
        return this.usersCompanyService.getVacanciesByUser(request)
    }
}
