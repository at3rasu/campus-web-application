import { Model } from "sequelize-typescript";
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
}
export {};
