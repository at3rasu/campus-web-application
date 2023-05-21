import { Controller, Post, Body, Get, UseGuards, Req, Param, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { AddRoleDto } from './dto/add-role.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Post('/insert')
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

    @Get('/get_resume')
    @Roles('admin', 'user')
    @UseGuards(RolesGuard)
    getResumeByUser(@Req() request: Request){
        return this.usersService.getResumeByUser(request);
    }

    @Put('/update/:id')
    @Roles('admin', 'user')
    @UseGuards(RolesGuard)
    updateUser(@Param('id') id, @Body() updateUserDto) {
    return this.usersService.updateUser(id, updateUserDto);
  }
}
