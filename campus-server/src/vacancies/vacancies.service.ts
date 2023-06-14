import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UploadFilesService } from 'src/upload-files/upload-files.service';
import { UsersCompanyService } from 'src/users-company/users-company.service';
import { AuthService } from 'src/auth/auth.service';
import { FileType, FilesService } from 'src/files/files.service';

@Injectable()
export class VacanciesService {
    constructor(@InjectModel(Vacancy) private vacancyRepository: typeof Vacancy,
                private jwtService: JwtService,
                // private uploadFilesService: UploadFilesService,
                private userCompanyService: UsersCompanyService,
                // private filesService: FilesService,
                // private authService: AuthService
                ){}

    async createVacancy(vacancyDto: CreateVacancyDto, 
        // image,
        req
        ){
        // const fileName = await this.uploadFilesService.createFile(image)
        // const fileName = uuid.v4()
        // const fileName = await this.filesService.createFile(FileType.IMAGE, image)
        const user = await this.userCompanyService.getUserCompanyByRequest(req)
        vacancyDto.userCompanyId = user.id
        const vacancy = await this.vacancyRepository.create({...vacancyDto,
            // image: fileName
        });
        return this.generateToken(vacancy);
    }

    private async generateToken(vacancy: Vacancy){
        const payload = {id: vacancy.id, email: vacancy.email, name : vacancy.nameVacancy, author: vacancy.author}
        return{
            token: this.jwtService.sign(payload)
        }
    }

    async getAllVacancies(){
        const vacancies = await this.vacancyRepository.findAll({include: {all:true}});
        return vacancies;
    }

    async deleteVacancy(id){
        
        return await this.vacancyRepository.destroy({ where: { id: id } });
    }

    async updateVacancy(id, updateVacancyDto){
        const vacancy = await this.vacancyRepository.update(updateVacancyDto, {where: {id}, returning: true})
        return vacancy
    }
}
