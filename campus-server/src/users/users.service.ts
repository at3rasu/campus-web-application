import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { AddRoleDto } from './dto/add-role.dto';
import { HttpException, HttpStatus} from "@nestjs/common";
import { CreateRoleDto } from 'src/roles/dto/create-role.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private roleService: RolesService){}

    async createUser(dto: CreateUserDto){
        const user = await this.userRepository.create(dto);
        let role = await this.roleService.getRoleByValue("user")
        if (role == null){
            const response = await this.roleService.createRoles(new CreateRoleDto("user", "Роль пользователя"))
        }
        role = await this.roleService.getRoleByValue("user")
        await user.$set('roles', [role.id])
        user.roles = [role]
        return user;
    }

    async getAllUsers(){
        const users = await this.userRepository.findAll({include: {all:true}});
        return users;
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({ where: {email}, include: {all : true}})
        return user
    }

    async getUserByLogin(login: string){
        const user = await this.userRepository.findOne({ where: {login}, include: {all : true}})
        return user
    }

    async addRole(dto: AddRoleDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.roleService.getRoleByValue(dto.value)
        if (role && user){
            await user.$add('role', role.id)
            return dto;
        }
        throw new HttpException('Пользователь или роль не были найдены', HttpStatus.NOT_FOUND)
    }
}
