import { Controller, Post, Body, UseGuards, Req, UploadedFile, UseInterceptors, Get, Res } from '@nestjs/common';
import { VacanciesService as VacanciesService } from './vacancies.service';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from "multer";
import { randomUUID } from 'crypto';
import Path = require('path');


const storage = {
    storage : diskStorage({
        destination: 'src/uploads/files',
        filename: (req, file, cb) =>{
            const filename: string = 'myfile-' + randomUUID();
            const extension: string = Path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        }
    })
}


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

    @Post('/check')
    @UseInterceptors(FileInterceptor('image'))
    check_file(@UploadedFile() image
        ){
        console.log('method check')
        console.log(image)
        return image;
    }

    @Get('/get_all_vacancies')
    getAllVacancies(){
        return this.vacanciesService.getAllVacancies();
    }
}
