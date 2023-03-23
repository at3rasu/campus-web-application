import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {}

    @Post()
    create(@Body() dto: CreateRoleDto){
        return this.rolesService.createRoles(dto);
    }

    @Get('/:value')
    getByvalue(@Param('value') value: string){
        return this.rolesService.getRoleByValue(value);
    }
}