import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UserCompany } from 'src/users-company/users-company.model';
import { UploadFilesService } from 'src/upload-files/upload-files.service';
import * as uuid from 'uuid'
import { UsersCompanyService } from 'src/users-company/users-company.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class VacanciesService {
    constructor(@InjectModel(Vacancy) private vacancyRepository: typeof Vacancy,
                private jwtService: JwtService,
                // private uploadFilesService: UploadFilesService,
                private userCompanyService: UsersCompanyService,
                private authService: AuthService){}

    async createVacancy(vacancyDto: CreateVacancyDto, 
        // image,
        req){
        // console.log(image)
        // const fileName = await this.uploadFilesService.createFile(image)
        const fileName = uuid.v4()
        const user = await this.userCompanyService.getUserCompanyByReq(req)
        vacancyDto.userCompanyId = user.id
        const vacancy = await this.vacancyRepository.create({...vacancyDto
            // , image: fileName
        });
        const token = (await this.authService.refreshToken(user.login)).token
        req.headers.authorization = `Bearer ${token}`
        return this.generateToken(vacancy);
    }

    private async generateToken(vacancy: Vacancy){
        const payload = {id: vacancy.id, email: vacancy.email, name : vacancy.nameVacancy}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    async getAllVacancies(){
        const vacancies = await this.vacancyRepository.findAll({include: {all:true}});
        return vacancies;
    }
}
