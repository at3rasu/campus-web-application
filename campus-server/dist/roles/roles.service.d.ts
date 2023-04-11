import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
export declare class RolesService {
    private roleReprository;
    constructor(roleReprository: typeof Role);
    createRoles(dto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
}
