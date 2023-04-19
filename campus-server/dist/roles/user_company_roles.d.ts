import { Model } from "sequelize-typescript";
export declare class UserCompanyRoles extends Model<UserCompanyRoles> {
    id: number;
    userCompanyId: number;
    roleId: number;
}
