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

    async createVacancy(vacancyDto: CreateVacancyDto, req){
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        const userCompanyId = this.jwtService.verify(token).id
        console.log(userCompanyId)
        vacancyDto.userCompanyId = userCompanyId
        const vacancy = await this.vacancyRepository.create(vacancyDto);
        return this.generateToken(vacancy);
    }

    private async generateToken(vacancy: Vacancy){
        const payload = {id: vacancy.id, email: vacancy.email, name : vacancy.nameVacancy}
        return{
            token: this.jwtService.sign(payload)
        }
    }
}
