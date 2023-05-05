import { Controller, Post, Body, UseGuards, Req } from '@nestjs/common';
import { VacanciesService as VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';

@Controller('vacancies')
export class VacanciesController {
    constructor(private vacanciesService: VacanciesService) {}

    @Post()
    @UseGuards(RolesGuard)
    @Roles('admin', 'user_company')
    create(@Body() vacancyDto: CreateVacancyDto,
           @Req() request: Request
        ){
        console.log(request.headers)
        // return this.vacanciesService.createVacancy(vacancyDto);
    }
}
