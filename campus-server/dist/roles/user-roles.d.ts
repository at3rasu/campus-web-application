import { Model } from "sequelize-typescript";
export declare class UserRoles extends Model<UserRoles> {
    id: number;
    userId: number;
    roleId: number;
    userCompanyId: number;
}
