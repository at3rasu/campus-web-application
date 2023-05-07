import { Controller, Post, Body, UseGuards, Req, UploadedFile, UseInterceptors, Get } from '@nestjs/common';
import { VacanciesService as VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('vacancies')
export class VacanciesController {
    constructor(private vacanciesService: VacanciesService) {}

    @Post()
    @UseGuards(RolesGuard)
    @Roles('admin', 'user_company')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() vacancyDto: CreateVacancyDto,
           @UploadedFile() image,
           @Req() request: Request
        ){
        return this.vacanciesService.createVacancy(vacancyDto, image, request);
    }

    @Get('/get_all_vacancies')
    getAllVacancies(){
        return this.vacanciesService.getAllVacancies();
    }
}
