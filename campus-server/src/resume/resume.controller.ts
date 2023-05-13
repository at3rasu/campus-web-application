import { Controller, Post, Body, UseGuards, Req, UploadedFile, UseInterceptors, Get, Res } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateResumeDto } from './dto/create-resume.dto';
import { ResumeService } from './resume.service';


@Controller('resume')
export class ResumeController {

    constructor(private resumeService: ResumeService){}

    @Post()
    @UseGuards(RolesGuard)
    @Roles('admin', 'user')
    @UseInterceptors(FileInterceptor('image'))
    create(@Body() resumeDto: CreateResumeDto,
           @Req() request: Request
        ){
        return this.resumeService.createResume(resumeDto, request);
    }


    @Get('/get_all_resume')
    getAllVacancies(){
        return this.resumeService.getAllResume();
    }
}
