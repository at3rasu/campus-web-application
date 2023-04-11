import { CreateRoleDto } from './dto/create-role.dto';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(dto: CreateRoleDto): Promise<import("./roles.model").Role>;
    getByvalue(value: string): Promise<import("./roles.model").Role>;
}
