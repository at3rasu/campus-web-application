import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AddRoleDto } from './dto/add-role.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<import("./users.model").User>;
    getAll(): Promise<import("./users.model").User[]>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    getResumeByUser(request: Request): Promise<import("../resume/resume.model").Resume[]>;
    updateUser(id: any, updateUserDto: any): Promise<[affectedCount: number, affectedRows: import("./users.model").User[]]>;
    getuserByToken(token: any): Promise<import("./users.model").User>;
}
