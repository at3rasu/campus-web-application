import { Put, Param, Controller, Post, Body, UseGuards, Req, UploadedFile, UseInterceptors, Get, Res } from '@nestjs/common';
import { VacanciesService as VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import Path = require('path');


@Controller('vacancies')
export class VacanciesController {
    constructor(private vacanciesService: VacanciesService) {}

    @Post('/insert')
    @UseGuards(RolesGuard)
    @Roles('admin', 'user_company')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() vacancyDto: CreateVacancyDto,
        //    @UploadedFile() image,
           @Req() request: Request
        ){
        return this.vacanciesService.createVacancy(vacancyDto, request);
    }

    @Get('/get_all_vacancies')
    getAllVacancies(){
        return this.vacanciesService.getAllVacancies();
    }

    // api.put('/vacancies/update/${id}')
    @Put('/update/:id')
    @Roles('admin', 'user_company')
    @UseGuards(RolesGuard)
    updateVacancy(@Param('id') id, @Body() updateVacancyDto) {
        return this.vacanciesService.updateVacancy(id, updateVacancyDto);
    }

    // api.post('/vacancies/delete/${id}')
    @Post('/delete/:id')
    @Roles('admin', 'user_company')
    @UseGuards(RolesGuard)
    deleteVacancy(@Param('id') id){
        return this.vacanciesService.deleteVacancy(id)
    }
}
