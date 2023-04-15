import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { AddRoleDto } from './dto/add-role.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto){
        return this.usersService.createUser(userDto);
    }

    @Get()
    @Roles('admin')
    @UseGuards(RolesGuard)
    getAll(){
        return this.usersService.getAllUsers();
    }

    @Roles('admin')
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto: AddRoleDto){
        return this.usersService.addRole(dto);
    }
}
