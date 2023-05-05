import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateVacancyDto } from './dto/create-vacancy.dto';
import { Vacancy } from './vacancies.model';
import { JwtService } from '@nestjs/jwt';
import { UserCompany } from 'src/users-company/users-company.model';

@Injectable()
export class VacanciesService {
    constructor(@InjectModel(Vacancy) private vacancyRepository: typeof Vacancy,
                // @InjectModel(UserCompany) private userCompanyRepository: typeof UserCompany,
                private jwtService: JwtService){}

    async createVacancy(vacancyDto: CreateVacancyDto){
        const vacancy = await this.vacancyRepository.create(vacancyDto);
        // const userCompanyId = this.findUserId()
        // await vacancy.$set('userCompanyId', userCompanyId)
        return this.generateToken(vacancy);
    }

    private async findUserId(){

    }

    private async generateToken(post: Vacancy){
        const payload = {id: post.id, email: post.email, name : post.nameVacancy}
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
