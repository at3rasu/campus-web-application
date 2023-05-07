import { Model } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { Vacancy } from "src/vacancies/vacancies.model";
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
    vacancies: Vacancy[];
}
export {};
