import { Model } from "sequelize-typescript";
import { UserCompany } from "src/users-company/users-company.model";
import { User } from "src/users/users.model";
interface RoleCreationAttrs {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttrs> {
    id: number;
    value: string;
    description: string;
    users: User[];
    users_company: UserCompany[];
}
export {};
