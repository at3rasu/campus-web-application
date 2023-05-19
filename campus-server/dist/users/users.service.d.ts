import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { AddRoleDto } from './dto/add-role.dto';
import { JwtService } from '@nestjs/jwt';
export declare class UsersService {
    private userRepository;
    private roleService;
    private jwtService;
    constructor(userRepository: typeof User, roleService: RolesService, jwtService: JwtService);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserByLogin(login: string): Promise<User>;
    addRole(dto: AddRoleDto): Promise<AddRoleDto>;
    getResumeByUser(req: any): Promise<import("../resume/resume.model").Resume[]>;
    getUserByRequest(req: any): Promise<User>;
    updateUser(id: any, updateuserDto: any): Promise<[affectedCount: number, affectedRows: User[]]>;
}
