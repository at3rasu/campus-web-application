import { Model } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
interface UserCompanyCreationAttrs {
    email: string;
    password: string;
}
export declare class UserCompany extends Model<UserCompany, UserCompanyCreationAttrs> {
    id: number;
    email: string;
    password: string;
    login: string;
    companyName: string;
    roles: Role[];
}
export {};
