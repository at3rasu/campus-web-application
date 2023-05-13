import { Injectable, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { UserCompany } from './users-company.model';
import { CreateUserCompanyDto } from './dto/create-user-company.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/roles/roles.model';
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';

@Injectable()
export class UsersCompanyService {
    constructor(@InjectModel(UserCompany) private userCompanyRepository: typeof UserCompany,
                private roleService: RolesService,
                private jwtService: JwtService){}

    async createUser(dto: CreateUserCompanyDto){
        const user = await this.userCompanyRepository.create(dto);
        let role = await this.roleService.getRoleByValue("user_company")
        if (role == null){
            const response = await this.roleService.createRoles(new CreateRoleDto("user_company", "Роль пользователя с компании"))
        }
        role = await this.roleService.getRoleByValue("user_company")
        console.log(role)
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        const users = await this.userCompanyRepository.findAll({include: {all:true}});
        return users;
    }

    async getUserByEmail(email: string){
        const user = await this.userCompanyRepository.findOne({ where: {email}, include: {all : true}})
        return user
    }

    async getUserByLogin(login: string){
        const user = await this.userCompanyRepository.findOne({ where: {login}, include: {all : true}})
        return user
    }

    async getVacanciesByUser(req){
        try{
            const authHeader = req.headers.authorization
            const token = authHeader.split(' ')[1]
            console.log(this.jwtService.verify(token).vacancies)
            return this.jwtService.verify(token).vacancies
        }catch(e){
            console.log(e)
        }
        
    }

    async getUserCompanyByReq(req){
        const authHeader = req.headers.authorization
        const token = authHeader.split(' ')[1]
        return this.jwtService.verify(token)
    }
}
